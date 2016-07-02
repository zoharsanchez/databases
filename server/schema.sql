CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int not null auto_increment primary key,
  name char(25)
);

CREATE TABLE messages (
  id int not null auto_increment primary key,
  message char(100),
  roomname char(25),
  userID int
  -- foreign key (userId) references users(id) on delete cascade
);

-- CREATE TABLE rooms (
--   id int not null auto_increment primary key,
--   roomname char(25)
-- );

-- CREATE TABLE users_rooms (
--   id int not null auto_increment primary key,
--   userID int,
--   roomID int,
--   foreign key (userID) references users(id),
--   foreign key (roomID) references rooms(id)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` CHAR(100) NULL DEFAULT NULL,
  `roomname` CHAR(25) NULL DEFAULT NULL,
  `id_users` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (id_users) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `messages` (`id`,`text`,`roomname`,`id_users`) VALUES
-- ('','','','');

*/