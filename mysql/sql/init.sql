DROP DATABASE IF EXISTS webapp;
CREATE DATABASE webapp;
USE webapp;

-- learning_languagesテーブル
DROP TABLE IF EXISTS learning_languages; 
CREATE TABLE learning_languages (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    learning_language VARCHAR(225) NOT NULL,
    language_color VARCHAR(255) NOT NULL
);

INSERT INTO learning_languages (learning_language, language_color) VALUES
('JavaScript', '0b03fc'),
('CSS', '1077a3'),
('PHP', '19b4c2'),
('HTML', '86c2db'),
('Laravel', 'b6a3d1'),
('SQL', '7250ab'),
('SHELL', '4d0fb8'),
('情報system基礎知識（その他）', '2f0b6e');

