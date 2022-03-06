<?php
require("./db_connect.php");
// 1.棒グラフについての処理

// 学習詳細テーブルのmonthデータを取得
$stmt = $dbh->query("SELECT * FROM learning_details WHERE DATE_FORMAT(learning_date, '%Y%m') = DATE_FORMAT(now(), '%Y%m')");
$bargraph_data = $stmt->fetchAll();
// print_r($bargraph_data);
// +----+---------------------+---------------+----------------------+---------------------+
// | id | learning_date       | learning_hour | learning_language_id | learning_content_id |
// +----+---------------------+---------------+----------------------+---------------------+
// |  6 | 2022-03-01 00:00:00 |             3 |                    3 |                   2 |
// |  7 | 2022-03-03 00:00:00 |             7 |                    1 |                   2 |
// |  8 | 2022-03-05 00:00:00 |             5 |                    3 |                   1 |
// +----+---------------------+---------------+----------------------+---------------------+

 foreach($bargraph_data as $each_bargraph_data):?>
    <?php
      $each_date = $each_bargraph_data['learning_date'];
      $each_date_day = date('d', strtotime($each_date));
    //   print_r($each_date_day);
      //   25, 26, 27, 28と表示
      ?>
      <?php endforeach; ?>

<?php
// 2.学習言語についての処理
$stmt = $dbh->query(
  "SELECT *FROM learning_details JOIN learning_languages ON learning_details.learning_language_id = learning_languages.id"
);
// learning_details・・・学習言語の日にちと学習時間が分かる
// learning_language_idに対応した数字はつけたが、なんの言語なのかは紐づいていない
// -- +----------------------+----------+------+-----+---------+----------------+
// -- | Field                | Type     | Null | Key | Default | Extra          |
// -- +----------------------+----------+------+-----+---------+----------------+
// -- | id                   | int      | NO   | PRI | NULL    | auto_increment |
// -- | learning_date        | datetime | NO   |     | NULL    |                |
// -- | learning_hour        | int      | NO   |     | NULL    |                |
// -- | learning_language_id | int      | NO   |     | NULL    |                |
// -- | learning_content_id  | int      | NO   |     | NULL    |                |
// -- +----------------------+----------+------+-----+---------+----------------+

// -- select learning_date, learning_hour from learning_details where id = 5;
// -- +---------------------+---------------+
// -- | learning_date       | learning_hour |
// -- +---------------------+---------------+
// -- | 2022-01-30 00:00:00 |             3 |
// -- +---------------------+---------------+



// learning_languages・・・なんの言語なのか、その言語が何色か、が分かる
// -- +-------------------+--------------+------+-----+---------+----------------+
// -- | Field             | Type         | Null | Key | Default | Extra          |
// -- +-------------------+--------------+------+-----+---------+----------------+
// -- | id                | int          | NO   | PRI | NULL    | auto_increment |
// -- | learning_language | varchar(225) | NO   |     | NULL    |                |
// -- | language_color    | varchar(255) | NO   |     | NULL    |                |
// -- +-------------------+--------------+------+-----+---------+----------------+


// なんの言語を（いつ）何時間勉強したか、それが何色なのか、が分かる
// +----+---------------------+---------------+----------------------+---------------------+----+-------------------+----------------+
// | id | learning_date       | learning_hour | learning_language_id | learning_content_id | id | learning_language | language_color |
// +----+---------------------+---------------+----------------------+---------------------+----+-------------------+----------------+
// |  1 | 2022-02-25 00:00:00 |             5 |                    3 |                   1 |  3 | PHP               | 19b4c2         |
// |  2 | 2022-02-26 00:00:00 |             4 |                    4 |                   2 |  4 | HTML              | 86c2db         |
// |  3 | 2022-02-27 00:00:00 |             6 |                    1 |                   1 |  1 | JavaScript        | 0b03fc         |
// |  4 | 2022-02-28 00:00:00 |             7 |                    2 |                   2 |  2 | CSS               | 1077a3         |
// |  5 | 2022-01-30 00:00:00 |             3 |                    3 |                   2 |  3 | PHP               | 19b4c2         |
// |  6 | 2022-03-01 00:00:00 |             3 |                    3 |                   2 |  3 | PHP               | 19b4c2         |
// |  7 | 2022-03-03 00:00:00 |             7 |                    1 |                   2 |  1 | JavaScript        | 0b03fc         |
// |  8 | 2022-03-05 00:00:00 |             5 |                    3 |                   1 |  3 | PHP               | 19b4c2         |
// +----+---------------------+---------------+----------------------+---------------------+----+-------------------+----------------+
$languages_data = $stmt->fetchAll();
$col_0 = array();
$col_1 = array();
foreach($languages_data as $each_language_data):?>
 <?php
      // echo gettype($each_language_data['learning_language']);
      $each_language_data['learning_language']='"'.$each_language_data['learning_language'].'"'.',';
      $each_language_data['language_color']='"#'.$each_language_data['language_color'].'"'.',';
      // print_r($each_language_data['learning_language']);
      // $array_language_data = explode(',', $each_language_data['learning_language']);
      // echo gettype($array_language_data);
      // print_r($array_language_data[0]);
      array_push($col_0, $each_language_data['learning_language']);
      array_push($col_1, $each_language_data['language_color']);
      // print_r($col_0);
      // print_r($col_1);
      $unique = array_unique($col_0);
      $unique1 = array_unique($col_1);
      // print_r($unique);
      // echo $unique;
      // echo $col_0[0];
      ?>
      <?php endforeach; ?>


      <?php
      $stmt = $dbh->query('SELECT sum(learning_hour) FROM learning_details JOIN learning_languages ON learning_details.learning_language_id = learning_languages.id GROUP BY learning_language;');
      $sum_learning_hour = $stmt->fetchAll();