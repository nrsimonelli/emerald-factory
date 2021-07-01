const passport = require('passport');
const DiscordStrategy = require('passport-discord');
const Player = require('../models/Player');

const pool = require('../modules/pool');

// Serialize User
passport.serializeUser((user, done) => {
  console.log('SERIALIZING USER');
  console.log(user.discord_id);
  done(null, user.discord_id);
});

// Deserialize User
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

// Discord Strategy Authentication
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

        console.log('USE ID', id);

        pool
          .query('SELECT * FROM "user" WHERE discord_id = $1;', [id])
          .then((result) => {
            const user = result && result.rows && result.rows[0];
            console.log('IN THEN PASSPORT.USE');

            if (user !== undefined) {
              const updateUserString = `UPDATE "user" SET
                        discord_tag = $2,
                        avatar = $3,
                        guilds = $4
                        WHERE "discord_id" = $1;`;

              const checkPlayerString = `SELECT * FROM player WHERE 
                        user_id = $1;`;

              const updatePlayerString = `UPDATE "player" SET
                        username = $2,
                        last_login = now(), 
                        user_id = $1;`;

              const newPlayerString = `INSERT INTO "player"
                        (username, user_id)
                        VALUES
                        ($1, $2);`;

              const checkPlayer = pool
                .query(checkPlayerString, [user.discord_id])
                .then((result) => {
                  console.log('checkPlayer result', result);
                  if (result !== undefined) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .catch((err) => {
                  console.log('checkPlayer error', err);
                });

              if (checkPlayer) {
                pool
                  .query(updatePlayerString, [
                    user.discord_id,
                    `${username}#${discriminator}`,
                  ])
                  .then((result) => {
                    console.log('PLAYER UPDATED:', result);
                  })
                  .catch((err) => {
                    console.log('PLAYER UPDATE ERROR:', err);
                  });
              }
              if (!checkPlayer) {
                pool
                  .query(newPlayerString, [
                    `${username}#${discriminator}`,
                    id,
                  ])
                  .then((result) => {
                    console.log('NEW PLAYER ADDED:', result);
                  })
                  .catch((err) => {
                    console.log('NEW PLAYER ERROR:', err);
                  });
              }

              pool
                .query(updateUserString, [
                  user.discord_id,
                  `${username}#${discriminator}`,
                  avatar,
                  guilds,
                ])
                .then((result) => {
                  console.log('UPDATE OK:', result);
                })
                .catch((err) => {
                  console.log('UPDATE ERR', err);
                });

              done(null, user);
            } else {
              const newUser = pool.query(
                `INSERT INTO "user" ("discord_id", "discord_tag", "avatar", "guilds") 
                        VALUES ($1, $2, $3, $4);`,
                [id, `${username}#${discriminator}`, avatar, guilds]
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
