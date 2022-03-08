<?php
// 投稿ボタンがクリックされた場合
echo __LINE__ . PHP_EOL;
if (isset($_POST["submit"])) {
    // 以下のechoは表示されない
    echo __LINE__ . PHP_EOL;
    try {
        define('HOSTNAME', 'db');
        define('DATABASE', 'webapp');
        define('USERNAME', 'webapp');
        define('PASSWORD', 'password');
        $dbh  = new PDO('mysql:host=' . HOSTNAME . ';dbname=' . DATABASE, USERNAME, PASSWORD);
        $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // self_produce.phpから送信された値を取得
        $learning_date = $_POST['learning_date'];
        $learning_hour = $_POST['learning_hour'];
        $learning_language = $_POST['learning_language'];
        $learning_content = $_POST['learning_content'];

        // INSERT文を変数に格納。プレスホルダーは、値を入れるための空箱
        $sql = "INSERT INTO learning_details (learning_date, learning_hour, learning_language_id, learning_content_id) VALUES 
        (:learning_date, :learning_hour, :learning_language_id, :learning_content_id)";
        $stmt = $dbh->prepare($sql); //挿入する値は空のまま、SQL実行の準備をする

        //方法１

        //  学習日のデータ追加
        $stmt->bindValue(":learning_date",  $learning_date, PDO::PARAM_STR);
        // 学習時間のデータ追加
        $stmt->bindValue(":learning_hour",  $learning_hour, PDO::PARAM_INT);
        // 学習言語idのデータ追加
        $stmt->bindValue(":learning_language",  $learning_language, PDO::PARAM_INT);
        // 学習コンテンツidのデータ追加
        $stmt->bindValue(":learning_content",  $learning_content, PDO::PARAM_INT);

        $stmt->execute();

    } catch (PDOException $e) {
        exit('データベースに接続できませんでした。' . $e->getMessage());
    }
}

// 方法２・・・型の指定に向いてなさそう
 // // 挿入する値を配列に格納する
        // $params = array(':learning_date' => $learning_date, ':learning_hour' => $learning_hour, ':learning_language_id' => $learning_language, ':learning_content_id' => $learning_content);
        // //挿入する値が入った変数をexecuteにセットしてSQLを実行
        // $stmt->execute($params);