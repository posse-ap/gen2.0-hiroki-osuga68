<?php 
// // DB接続情報
// $user = 'quizy';
// $pass = 'password';
// $dbname = 'quizy';
// $host = 'localhost';
echo (empty($_SERVER['HTTPS']) ? 'http://' : 'https://').$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

// defineの値は環境によって変えてください。
define('HOSTNAME', 'db');
define('DATABASE', 'quizy');
define('USERNAME', 'quizy');
define('PASSWORD', 'password');

// DB接続を試みる
try {
  // MySQLに接続するためのパーツ = PDOインスタンス を生成
  // 接続に成功したら、SQL文を使ってデータを引っ張ったりできるPDOオブジェクトを返してくれる
  $db  = new PDO('mysql:host=' . HOSTNAME . ';dbname=' . DATABASE, USERNAME, PASSWORD);
  $msg = "MySQLへの接続確認が取れました。";  
  //データベースに対して実行するSQL文を作成
  $sql = "SELECT * FROM big_questions";
  //SQL文を実行
  $statement = $db -> query($sql);
	
	//レコード件数取得
	$row_count = $statement->rowCount();
	
	while($row = $statement->fetch()){
		$rows[] = $row;
	}
  //データベース接続切断
	// $db = null;

} catch (PDOException $e) {
  $isConnect = false;
  $msg       = "MySQLへの接続に失敗しました。<br>(" . $e->getMessage() . ")";
}
    $id = $_GET['id'];
    echo $id;
    
    $choice = $db->prepare('SELECT * FROM choices WHERE big_question_id=?'.$id);
    $choice->execute(array($_REQUEST['id']));
    $choice_data = $choice->fetchAll();
?>

<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>クイジー php version</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="writing.css">
</head>
<body>
    <p><?php echo $msg; ?></p>
    
    レコード件数： <?php echo $row_count; ?>
 
<table border='1'>
<tr><td>id</td><td>...question</td></tr>
 <!-- SQL実行結果が連想配列で取得出来るため、foreach を使って全部ループ -->
<?php 
foreach($rows as $row){
?> 
<tr> 
	<td><?php echo $row['id']; ?></td> 
	<td><?php echo htmlspecialchars($row['name'],ENT_QUOTES,'UTF-8'); ?></td> 
</tr> 
<?php 
} 
?>
 
</table>

 
    
    <div id="main" class="container">
        <!-- writing.jsに書き出したhtml要素をここに呼び出す -->
    </div>
     
    <script src="writing.js"></script>
</body>
</html>
