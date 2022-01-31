<?php 
// defineの値は環境によって変えてください。
define('HOSTNAME', 'db');
define('DATABASE', 'webapp');
define('USERNAME', 'webapp');
define('PASSWORD', 'password');

// DB接続を試みる

try {
  // MySQLに接続するためのパーツ = PDOインスタンス を生成
  // 接続に成功したら、SQL文を使ってデータを引っ張ったりできるPDOオブジェクトを返してくれる
//   PDOクラスのインスタンスを作成するだけで、どのデータベースとも接続が可能。
  $dbh  = new PDO('mysql:host=' . HOSTNAME . ';dbname=' . DATABASE, USERNAME, PASSWORD);
  $msg = "MySQLへの接続確認が取れました。";  
} catch (PDOException $e) {
  $isConnect = false;
  $msg       = "MySQLへの接続に失敗しました。<br>(" . $e->getMessage() . ")";
}


