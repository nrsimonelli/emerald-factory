CREATE TABLE event (
	id bigint NOT NULL,
	eventtitle varchar(255) NOT NULL,
	startdate date NOT NULL,
	enddate date NOT NULL,
	active boolean,
	seats int,
	processed boolean DEFAULT false,
	ranked boolean DEFAULT true,
	CONSTRAINT event_pkey PRIMARY KEY (id)
);

CREATE TABLE "user" (
  discord_id bigint NOT NULL, 
  discord_tag varchar(255) NOT NULL, 
  avatar varchar(255) NOT NULL, 
  guilds text [],
  CONSTRAINT user_pkey PRIMARY KEY (discord_id)
);

CREATE TABLE player (
	id serial NOT NULL,
	user_id bigint NOT NULL,
	username varchar(255) NOT NULL,
	datecreated DATE NOT NULL DEFAULT NOW(),
	lastlogin DATE,
	banned boolean DEFAULT false,
	elo int NOT NULL DEFAULT 1200,
	CONSTRAINT player_pkey PRIMARY KEY (id),
	CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES "user" (discord_id)
);
CREATE UNIQUE INDEX usernameunique ON player(username);

CREATE TABLE match (
	id bigint NOT NULL,
	event_id bigint NOT NULL,
	matchtitle varchar(255) NOT NULL,
	CONSTRAINT match_pkey PRIMARY KEY (id),
	CONSTRAINT event_fk FOREIGN KEY (event_id) REFERENCES event (id)
);

CREATE TABLE game (
	id serial NOT NULL,
	match_id bigint NOT NULL,
	gamenumber int NOT NULL,
	completed boolean DEFAULT false,
	confirmed boolean DEFAULT false,
	CONSTRAINT game_pkey PRIMARY KEY (id),
	CONSTRAINT game_match_fk FOREIGN KEY (match_id) REFERENCES match (id)
);

CREATE TABLE game_player (
	game_id bigint NOT NULL,
	player_id bigint NOT NULL,
	faction varchar(255),
	mat varchar(255),
	bid int, 
	score int,
	round int,
	rank int,
	CONSTRAINT game_player_game_fk FOREIGN KEY (game_id) REFERENCES game (id),
	CONSTRAINT game_player_player_fk FOREIGN KEY (player_id) REFERENCES player(id)
);
