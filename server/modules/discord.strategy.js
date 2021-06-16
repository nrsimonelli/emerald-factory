const passport = require('passport');
const DiscordStrategy = require('passport-discord');

const pool = require('../modules/pool');

passport.serializeUser((user, done) => {
  console.log('SERIALIZING USER');
  console.log(user.discord_id);
  done(null, user.discord_id);
});

passport.deserializeUser((discord_id, done) => {
  console.log('DESERIALIZING USER');
  pool
    .query(`SELECT * FROM "user" WHERE discord_id = $1`, [discord_id])
    .then((result) => {
      const user = result && result.rows && result.rows[0];

      if (user !== undefined) {
        // user found
        done(null, user);
      }
    })
    .catch((err) => {
      console.log('error in deserialize', err);
      done(err, null);
    });
});

passport.use(
  'discord',
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      redirectURL: process.env.DISCORD_REDIRECT,
      scope: ['identify', 'guilds'],
    },
    (accessToken, refreshToken, profile, done) => {
      try {
        const { id, username, discriminator, avatar, guilds } =
          profile;

        console.log('USE ID', profile.id);

        pool
          .query('SELECT * FROM "user" WHERE discord_id = $1;', [
            profile.id,
          ])
          .then((result) => {
            const user = result && result.rows && result.rows[0];
            console.log('IN THEN PASSPORT.USE');

            if (user !== undefined) {
              const updateUserString = `UPDATE "user" SET
                        discord_tag = $2,
                        avatar = $3,
                        guilds = $4
                        WHERE "discord_id" = $1;`;

              pool
                .query(updateUserString, [
                  user.discord_id,
                  `${profile.username}#${profile.discriminator}`,
                  profile.avatar,
                  profile.guilds,
                ])
                .then((result) => {
                  console.log('UPDATE OK');
                })
                .catch((err) => {
                  console.log('UPDATE ERR', err);
                });

              done(null, user);
            } else {
              const newUser = pool.query(
                `INSERT INTO "user" ("discord_id", "discord_tag", "avatar", "guilds") 
                        VALUES ($1, $2, $3, $4);`,
                [
                  profile.id,
                  `${profile.username}#${profile.discriminator}`,
                  profile.avatar,
                  profile.guilds,
                ]
              );

              done(null, newUser);
            }
          });
      } catch (err) {
        console.log('error in passport', err);
        return done(err, null);
      }
    }
  )
);

module.exports = passport;
