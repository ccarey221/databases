CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int,
  name varchar(25),
  primary key(id)
);

CREATE TABLE users (
  id int,
  name varchar(25),
  primary key(id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int,
  user int,
  content varchar(250),
  room int,
  primary key(id),
  foreign key(user) REFERENCES users(id),
  foreign key(room) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

