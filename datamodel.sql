CREATE TABLE "event" (
  id SERIAL PRIMARY KEY NOT NULL,
  event_title VARCHAR(80),
  start_date DATETIME NOT NULL,
  end_date DATETIME NOT NULL,
  seats INT NOT NULL,
  processed BOOLEAN NOT NULL DEFAULT FALSE,
  ranked BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE player (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(80) NOT NULL UNIQUE,
  banned BOOLEAN NOT NULL DEFAULT false,
  elo INT NOT NULL DEFAULT 1500
);

CREATE TABLE "user" (
  "discord_id" SERIAL PRIMARY KEY NOT NULL, 
  "discord_tag" VARCHAR(255) NOT NULL, 
  "avatar" VARCHAR(255 NOT NULL), 
  "guilds" TEXT []
);

CREATE TABLE game (
  id SERIAL PRIMARY KEY NOT NULL,
  match_id INT REFERENCES match,
  game_number INT NOT NULL,
  finished BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE match (
  id SERIAL PRIMARY KEY NOT NULL,
  event_id INT REFERENCES "event",
  match_title VARCHAR(80),
  match_number INT NOT NULL
  match_type INT
);

CREATE TABLE game_player (
  game_id INT REFERENCES game,
  player_id INT REFERENCES player,
  faction VARCHAR(80),
  mat VARCHAR(80),
  bid INT,
  score INT,
  round INT,
  rank INT
);
