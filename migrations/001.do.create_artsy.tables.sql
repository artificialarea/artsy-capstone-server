CREATE TABLE users (
  userid INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  username varchar(50) NOT NULL UNIQUE,
  pwd varchar(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  bio varchar(255),
  date_created TIMESTAMPTZ NOT NULL DEFAULT now(),
  followers varchar(255)
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  user_id INTEGER references users (userid) ON DELETE CASCADE,
  title varchar(50) NOT NULL,
  pic varchar(200) NOT NULL,
  desc_post varchar(144) NOT NULL,
  date_created TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE comments (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  post_id INTEGER references posts (id) ON DELETE CASCADE,
  user_id INTEGER references users (userid) ON DELETE CASCADE,
  desc_comment varchar(144) NOT NULL
);

CREATE TABLE likes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  post_id INTEGER references posts (id) ON DELETE CASCADE,
  user_id INTEGER references users (userid) ON DELETE CASCADE,
  isLiked BOOLEAN
);

CREATE TABLE followers (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    followed_user_id INTEGER
        REFERENCES users(userid) ON DELETE CASCADE NOT NULL,
    follower_user_id INTEGER NOT NULL
);

-- NOTE:
-- Need to increase the char length of 'pwd' to accomodate bcrypt hash