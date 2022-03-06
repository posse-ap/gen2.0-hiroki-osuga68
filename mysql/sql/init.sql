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
-- +-------------------+--------------+------+-----+---------+----------------+
-- | Field             | Type         | Null | Key | Default | Extra          |
-- +-------------------+--------------+------+-----+---------+----------------+
-- | id                | int          | NO   | PRI | NULL    | auto_increment |
-- | learning_language | varchar(225) | NO   |     | NULL    |                |
-- | language_color    | varchar(255) | NO   |     | NULL    |                |
-- +-------------------+--------------+------+-----+---------+----------------+

--  select learning_language from learning_languages where id = 1;
-- +-------------------+
-- | learning_language |
-- +-------------------+
-- | JavaScript        |
-- +-------------------+



-- learning_contentsテーブル
DROP TABLE IF EXISTS learning_contents;
CREATE TABLE learning_contents (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    learning_content VARCHAR(225) NOT NULL,
    content_color VARCHAR(255) NOT NULL
);


INSERT INTO learning_contents (learning_content, content_color) VALUES
('ドットインストール', '0b03fc'),
('N予備校', '1077a3'),
('POSSE課題', '19b4c2');
-- +------------------+--------------+------+-----+---------+----------------+
-- | Field            | Type         | Null | Key | Default | Extra          |
-- +------------------+--------------+------+-----+---------+----------------+
-- | id               | int          | NO   | PRI | NULL    | auto_increment |
-- | learning_content | varchar(225) | NO   |     | NULL    |                |
-- | content_color    | varchar(255) | NO   |     | NULL    |                |
-- +------------------+--------------+------+-----+---------+----------------+

-- learning_detailsテーブル
DROP TABLE IF EXISTS learning_details;
CREATE TABLE learning_details (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
learning_date datetime NOT NULL,
learning_hour INT NOT NULL,
learning_language_id INT NOT NULL,
learning_content_id INT NOT NULL
);

INSERT INTO learning_details (learning_date, learning_hour, learning_language_id, learning_content_id) VALUES
('2022/2/25', 5, 3, 1),
('2022/2/26', 4, 4, 2),
('2022/2/27', 6, 1, 1),
('2022/2/28', 7, 2, 2),
('2022/1/30', 3, 3, 2);

INSERT INTO learning_details (learning_date, learning_hour, learning_language_id, learning_content_id) VALUES
('2022/3/1', 3, 3, 2),
('2022/3/3', 7, 1, 2),
('2022/3/5', 5, 3, 1);
-- +----------------------+----------+------+-----+---------+----------------+
-- | Field                | Type     | Null | Key | Default | Extra          |
-- +----------------------+----------+------+-----+---------+----------------+
-- | id                   | int      | NO   | PRI | NULL    | auto_increment |
-- | learning_date        | datetime | NO   |     | NULL    |                |
-- | learning_hour        | int      | NO   |     | NULL    |                |
-- | learning_language_id | int      | NO   |     | NULL    |                |
-- | learning_content_id  | int      | NO   |     | NULL    |                |
-- +----------------------+----------+------+-----+---------+----------------+

-- select learning_date, learning_hour from learning_details where id = 5;
-- +---------------------+---------------+
-- | learning_date       | learning_hour |
-- +---------------------+---------------+
-- | 2022-01-30 00:00:00 |             3 |
-- +---------------------+---------------+

-- 今日のデータをとってくる（2/27の学習時間がとれた）
-- select learning_hour from learning_details where learning_date =date(now());
-- +---------------+
-- | learning_hour |
-- +---------------+
-- |             6 |
-- +---------------+

-- 2月分だけ合計されてる
-- select sum(learning_hour) from learning_details where date_format(learning_date, '%Y%m') = date_format(now(), '%Y%m');
-- +--------------------+
-- | sum(learning_hour) |
-- +--------------------+
-- |                 22 |
-- +--------------------+

-- 1月分も含んだ全体が集計されてる
-- select sum(learning_hour) from learning_details;
-- +--------------------+
-- | sum(learning_hour) |
-- +--------------------+
-- |                 25 |
-- +--------------------+

