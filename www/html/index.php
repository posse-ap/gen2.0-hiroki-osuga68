<?php 

// echo (empty($_SERVER['HTTPS']) ? 'http://' : 'https://').$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

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
} catch (PDOException $e) {
  $isConnect = false;
  $msg       = "MySQLへの接続に失敗しました。<br>(" . $e->getMessage() . ")";
}
    $id = $_GET['id'];
    // echo $id;
    
    $question = $db->prepare('SELECT * FROM big_questions WHERE big_question_id='.$id);
    $question->execute(array($_REQUEST['id']));
    $question_data = $question->fetchAll();
    // print_r($question_data);

    $choice = $db->prepare('SELECT * FROM choices WHERE big_question_id='.$id);
    $choice->execute(array($_REQUEST['id']));
    $choice_data = $choice->fetchAll();
    // print_r($choice_data);
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
 
<table>
<tr><td>id</td><td>& question</td></tr>
<tr> 
	<td><?php print($question_data[0][1]); ?></td> 
	<td><?php print($question_data[0][2]); ?></td> 
</tr> 
</table>

 <?php
 foreach($choice_data as $choice_data){
  $shuffle_number = [0,1,2];
  shuffle($shuffle_number);
   ?>    
    <div id="main" class="container">
      <h2 class="outline"><span><?php echo $choice_data['question_id']?>.この地名はなんて読む？</span></h2>
      <div>
        <img src="../quizy images/<?php echo $choice_data['image']?>" alt="難読地名">
      </div>
      <ul class="list_arrange">
        <li><button onclick="makingTrueAnswerBox(<?= $choice_data['question_id'] ?>,<?= $shuffle_number[0]?>, 0)" class="choices_arrange" id="<?php print($choice_data['question_id'])?>_choice<?php $shuffle_number[0]?>"><?php echo $choice_data["choice$shuffle_number[0]"];?></button></li>
        <li><button onclick="makingTrueAnswerBox(<?= $choice_data['question_id'] ?>,<?= $shuffle_number[1]?>, 0)" class="choices_arrange" id="<?php print($choice_data['question_id'])?>_choice<?php $shuffle_number[1]?>"><?php echo $choice_data["choice$shuffle_number[1]"];?></button></li>
        <li><button onclick="makingTrueAnswerBox(<?= $choice_data['question_id'] ?>,<?= $shuffle_number[2]?>, 0)" class="choices_arrange" id="<?php print($choice_data['question_id'])?>_choice<?php $shuffle_number[2]?>"><?php echo $choice_data["choice$shuffle_number[2]"];?></button></li>
      </ul>
      <div class="result_border" id="correct_area<?php  print($choice_data['question_id']) ?>">
        <span class="true_underline">正解！</span>
        <p>正解は<?php print($choice_data['choice0']);?>です</p>
      </div>
      <div class="result_border" id="false_area<?php  print($choice_data['question_id']) ?>">
        <span class="false_underline">不正解。。。</span>
        <p>正解は<?php print($choice_data['choice0']);?>です</p>
      </div>
        
    </div>
 
<?php
 }
 ?>
    <script src="writing.js"></script>
</body>
</html>
