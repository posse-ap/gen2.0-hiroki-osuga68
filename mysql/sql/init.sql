
DROP DATABASE IF EXISTS quizy;
CREATE DATABASE quizy;
USE quizy;

-- questionテーブル
DROP TABLE IF EXISTS question; 
CREATE TABLE question (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO question (name) VALUES ('東京');