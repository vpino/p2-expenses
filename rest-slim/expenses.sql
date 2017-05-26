CREATE DATABASE IF NOT EXISTS expenses;
USE expenses;

CREATE TABLE product(
	id 			int(255) AUTO_INCREMENT NOT NULL,
	name		varchar(255),
	description text,
	price		varchar(255),
	image		varchar(255),
CONSTRAINT pk_products PRIMARY KEY(id)
)ENGINE=InnoDb;