-- create database
CREATE DATABASE blogs;

use blogs;

-- create table
CREATE TABLE blogs (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  body VARCHAR(1000) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe customer;