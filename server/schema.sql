CREATE DATABASE IF NOT EXISTS movielist;

Use movielist;


CREATE TABLE `Movies` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `movieName` VARCHAR(25) NULL DEFAULT NULL,
  `watched?` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);;