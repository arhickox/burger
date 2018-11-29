CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burgerName VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);