<?php
require("./db_connect.php");
require("./chart_db_fetch.php");
// SQLステートメントの実行

  //1つ目・・・query(SQL文)
      // 結果をPDOStatementオブジェクトとして返す
      // 即時実行、ユーザからの入力をSQL文に含めることが出来ない

  // 2つ目・・・prepare('SQL文')でSQL文の準備、excuteメソッドで実行
      //いずれも、結果をPDOStatementオブジェクトとして返す
      // ユーザ入力値をパラメータに指定する場合は、必ずプリペアドステートメントを使う
      //SQL文で値がいつでも変更できるように、変更する箇所だけ変数のようにした命令文を作る仕組み

// dbデータの取得

    // queryやexcuteメソッドでSQL文を実行しただけでは、その結果が戻り値として返されるだけ
    // fetch、fetchAllメソッド
    // dbからデータを取り出した際の「配列の形式を指定するモード」＝"フェッチモード"を任意で指定
    // fetch()やfetchAll()の引数として指定することで、無駄なく必要なデータだけ取り出すことが可能

      // ①FETCH_BOTH：【配列のキー】カラム名＆連番、デフォルトモード。連番、カラム双方からデータにアクセスできるがデータ量が2倍で多い
      // ②FETCH_ASSOC：【配列のキー】カラム名のみ、基本これがおススメ
      // ③FETCH_KEY_PAIR：指定した2つのカラムを「キー／値」のペアの配列にする、特定の2カラムだけ取り出したいならこれ
      // ④FETCH_COLUMN：指定した1つのカラムだけを1次元配列で取得 、1カラムだけ取り出したいならこれ

    $stmt = $dbh->query("SELECT * FROM learning_languages");
    $learning_languages = $stmt->fetchAll();
        //   print_r($learning_languages)
    $stmt = $dbh->query("SELECT * FROM learning_contents");
    $learning_contents = $stmt->fetchAll();

    // 学習詳細テーブルから学習日カラムの中のTodayデータをwhereとし、学習時間を取得する
    $stmt = $dbh->query("SELECT learning_hour FROM learning_details WHERE learning_date = DATE(now())");
    $today_learning_hour = $stmt->fetch(PDO::FETCH_COLUMN)?: 0;
        // print_r($today_learning_hour) 2/27のデータ6時間がとれていること確認
    
    // 学習詳細テーブルから学習日カラムの中のmonthデータをwhereとし、学習時間を取得する
    //  DATE_FORMAT()関数・・・1つ目の引数に指定した日付け、2つ目の引数に整形したい型の指定
        // %Y・・・年を数字4桁 %m・・・月を数字（00～12で）
    $stmt = $dbh->query("SELECT sum(learning_hour) FROM learning_details WHERE DATE_FORMAT(learning_date, '%Y%m') = DATE_FORMAT(now(), '%Y%m')");
    $month_learning_hour = $stmt->fetch(PDO::FETCH_COLUMN)?: 0;

    // 学習詳細テーブルから学習日カラムの中の合計データをwhereとし、学習時間を取得する
    $stmt = $dbh->query("SELECT sum(learning_hour) FROM learning_details;");
    $total_learning_hour = $stmt->fetch(PDO::FETCH_COLUMN)?: 0;
    // ユーザーが入力する想定である学習詳細の内容については、prepare('SQL文')でSQL文の準備
    // プレースホルダー・・・SQL文に対して後から値をセットするための場所を確保する機能
        // → ? または : で表現される
        // データベースの情報が漏洩する危険性を阻止するため

    // bindvalue()とは、プリペアドステートメントで使用するSQL文の中で、変数の値をバインドするための関数
    

?>

<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自主制作</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="self_produce.css">
    <!-- font awesome読み込み -->
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <!-- カレンダー埋め込み -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <!-- chart.jsの読み込み -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
    <!-- datalabelsプラグインを呼び出す -->
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <!-- <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script> -->
</head>

<body>
    <!-- ヘッダー部分 -->
    <header id="header">
        <div id="header_inner" class="wrapper">
            <div class="logo_area">
                <h1 class="site_title">
                    <img src="./img/posseLogo.png" alt="POSSE">
                </h1>
                <span class="week">4th week</span>
            </div>
            <button id="openModal" class="submit__button">記録・投稿</button>
        </div>
    </header>
    <!-- loading -->
    <div id="my-spinner">
        <div id="circle-border">
            <div id="circle-core"></div>
        </div>
    </div>


    <!-- 月のweek毎のシート？ -->
    <div id="contents">
        <!-- 左側のコンテンツ -->
        <div class="bar_graph_wrapper">
            <div class="date">
                <section>
                    <p class="subtitle">Today</p>
                    <p class="number"><?php print_r($today_learning_hour)?></p>
                    <p class="hour">hour</p>
                </section>
                <section>
                    <p class="subtitle">Month</p>
                    <p class="number"><?php print_r($month_learning_hour)?></p>
                    <p class="hour">hour</p>
                </section>
                <section>
                    <p class="subtitle">Total</p>
                    <p class="number"><?php print_r($total_learning_hour)?></p>
                    <p class="hour">hour</p>
                </section>
            </div>
            <section class="bargraph">
                <div style="position: relative; height:auto; width:100%">
                    <canvas id="myBar2Chart">
                        <!-- グラフはここに差し込む -->
                        <script type="text/javascript">
                            //棒グラフ2
var ctx = document.getElementById("myBar2Chart").getContext("2d");;

var blue_gradient = ctx.createLinearGradient(0, 0, 0, 600);
blue_gradient.addColorStop(0, "#3DCEFE");
blue_gradient.addColorStop(1, "#0056c0");

var myBar2Chart = new Chart(ctx, {
  //グラフの種類
  type: 'bar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", "", "24", "", "26", "", "28", "", "30"],
      //データセット
      datasets: [
          {
              //凡例
              label: "学習時間",
              //背景色
              // backgroundColor: "rgba(179,181,198,0.2)",
              backgroundColor: blue_gradient,
              //枠線の色
              borderColor: blue_gradient,
              //枠線の太さ
              borderWidth: 1,
              //背景色（ホバーしたときに）
              hoverBackgroundColor: "rgba(0, 191, 255, 0.4)",
              //枠線の色（ホバーしたときに）
              hoverBorderColor: "rgba(0, 191, 255, 0.4)",
              borderRadius: 10,
              borderSkipped: false,
              //グラフのデータ
                //   dataの中に、24番目（25日）に5(h)をいれたい
      data: [<?php foreach($bargraph_data as $each_bargraph_data):?>
    <?php
      $each_date = $each_bargraph_data['learning_date'];
      $each_date_day = date('d', strtotime($each_date));
      echo $each_bargraph_data['learning_hour'];
      echo ',';
      ?>
      <?php endforeach; ?>
      
      ]
    
              
            //   data: [2, 1, 3, 5, 2, 3, 5, 7, 5, 4, 3, 6, 8, 7, 4, 7, 5, 2, 6, 3, 5, 2, 3, 5, 7, 6, 4, 3, 1, 4]
          }
      ]
  },
  
  //オプションの設定
  options: {
        legend: {
        display: false
        },
      //軸の設定
      scales: {
        xAxes:[{
          gridLines: {
            //x軸の網線
            display: false
          },
        }],
          //縦軸の設定
          yAxes: [{
              //目盛りの設定
              ticks: {
                  //開始値を0にする
                    beginAtZero:true,
                    min: 0,                        // 最小値
                    max: 8,                       // 最大値
                    stepSize: 2,                   // 軸間隔
                    fontColor: "rgb(65, 105, 225)",             // 目盛りの色
                    fontSize: 10,                   // フォントサイズ
                    callback: function(value, index, values){
                      return  value +  'h'
                    }
              },
              gridLines:{
                display:false,
            },
            // scaleLabel: {              //軸ラベル設定
            //     display: true,          //表示設定
            //     labelString: '勉強時間',  //ラベル
            //     fontSize: 10               //フォントサイズ
            //  }
          }]
      },
      //ホバーの設定
      hover: {
          //ホバー時の動作（single, label, dataset）
          mode: 'single'
      },
      layout: {                          // 全体のレイアウト
        padding: {                         // 余白
            left: 10,
            right: 10,
            top: 10,
            bottom: 0
        }
    }
      
  }
});
                        </script>
                    </canvas>

                </div>
            </section>
        </div>
        <!-- 右側のコンテンツ -->
        <div class="doughnut_chart_wrapper">
            <section class="learning_language_area">
                <div class="learning_language">学習言語</div>
                <div class="languages_graph" style="position: relative; height:46%; width:80%">
                    <canvas id="myChart">
                        <!-- <div id="donutchart1" style="width: 100%; height: 300px;"> -->
                        <!-- グラフはここに差し込む -->
                        <script type="text/javascript">
                            
                            var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
            var dataSum = 0;
            dataset.data.forEach(function (element){
                dataSum += element;
            });

            var meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(255, 255, 255)';

                    var fontSize = 10;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Just naively convert to string for now
                    var labelString = chart.data.labels[index];
                    var dataString = (Math.round(dataset.data[index] / dataSum * 1000)/10).toString() + "%";
                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    // ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
                    ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
                });
            }
        });
    }
};

// Chart
var myChart = "myChart";
var chart = new Chart(myChart, {
    type: 'doughnut',
    data: {
        labels: [
            // "JavaScript", "CSS", "PHP", "HTML", "Laravel", "SQL", "SHELL", "情報system基礎知識（その他）"
            <?php foreach($unique as $value):?>
       <?php
      echo $value;
      ?>
      <?php endforeach; ?>
        ],
        datasets: [{
            label: "学習言語",
            backgroundColor: [
                // "#0b03fc", "#1077a3", "#19b4c2", "#86c2db", "#b6a3d1", "#7250ab", "#4d0fb8", "#2f0b6e"
                <?php foreach($unique1 as $value):?>
       <?php
      echo $value;
      ?>
      <?php endforeach; ?>
            ],
            data: [
                // 50, 50, 40, 52, 47, 46, 26, 20
                <?php foreach($sum_learning_hour as $each_sum_learning_hour):?>
                    <?php
                    // 最初のkeyがsum(learning_hour)になってる。。。？
                    echo $each_sum_learning_hour[0].",";
                    // print_r($each_sum_learning_hour);
                    ?>
                <?php endforeach; ?>
            ],
        }]
    },
    options: {
        // legendCallback: function(chart) {
        //     // ここでHTML文字列を返します。
        // }
        responsive: true,
        legend:{position:"bottom",
        display: false
        // labels:{filter: function(items) {
        //     return items.text != 'JavaScript';
        //     // return items.datasetIndex != 2;
        //   }}
        },
        maintainAspectRatio: false,
    },
    plugins: [dataLabelPlugin]
});

                        </script>
                        <!-- </div> -->
                    </canvas>
                </div>

                <ul class="each_language">
                    <?php foreach($learning_languages as $learning_language):?>
                        <li><span class="circle<?php print($learning_language['language_color']) ?>"></span><?php print($learning_language['learning_language'])?></li>
                        <?php endforeach; ?>     
                </ul>
            </section>
            <section class="learning_contents_area">
                <div class="learning_contents">学習コンテンツ</div>
                <div class="contents_graph" style="position: relative; height:46%; width:80%">
                    <canvas id="myChart3">
                        <!-- <div id="donutchart" style="width: 100%; height: 300px;"> -->
                        <!-- グラフはここに差し込む -->
                        <!-- </div> -->
                    </canvas>
                </div>
                <ul class="each_content">
                    <!-- <li><span class="circle1"></span>ドットインストール</li>
                    <li><span class="circle2"></span>N予備校</li>
                    <li><span class="circle3"></span>POSSE課題</li> -->
                    <?php foreach($learning_contents as $learning_content):?>
                        <li><span class="circle<?php print($learning_content['content_color'])?>"></span><?php print($learning_content['learning_content'])?></li>
                        <?php endforeach; ?>
                </ul>
            </section>
        </div>
    </div>
    <!-- 月のページ切り替え -->
    <div class="change_page">
        <time datetime="2021-10">
            <a href="#" class="arrow_left"></a>
            2021年10月
            <a href="#" class="arrow_right"></a>
        </time>
    </div>
    <!-- sp版のボタン -->
    <button id="openModal_2" class="submit__button_sp">記録・投稿</button>

    <!-- モーダルエリア、場所の確保 -->
    <section id="modalArea" class="modalArea">
        <!-- モーダル表示時の背景 -->
        <div id="modalBg" class="modalBg"></div>
        <!-- モーダル内に書き込むコンテンツ部分 -->
        <div class="modalWrapper">
            <form action="/" name="submitForm" class="submit__form">
                <!-- エリア内のflex適用部分 -->
                <div class="modal_area">
                    <!-- 左側のコンテンツ -->
                    <div id="modal_1st">

                        <div>
                            <div class="modal_small_title">学習日</div>
                            <input id="sample" class="s_textbox flatpickr-input" type="text" readonly="readonly">
                        </div>

                        <div>
                            <div class="modal_small_title">学習コンテンツ（複数選択可）</div>
                            <ul class="check_contents">
                                <li><label id="check_area1"><input type="checkbox" name="learning" value="N予備校"><span
                                            id="checkbox1" class="fas fa-check-circle check_style"></span>N予備校</label>
                                </li>
                                <li><label id="check_area2"><input type="checkbox" name="learning"
                                            value="ドットインストール"><span id="checkbox2"
                                            class="fas fa-check-circle check_style"></span>ドットインストール</label></li>
                                <li><label id="check_area3"><input type="checkbox" name="learning" value="POSSE課題"><span
                                            id="checkbox3"
                                            class="fas fa-check-circle check_style"></span>POSSE課題</label></li>
                            </ul>
                        </div>

                        <div>
                            <div class="modal_small_title">学習言語（複数選択可）</div>
                            <ul class="check_contents">
                                <li><label id="check_area4"><input type="checkbox" name="learning" value="HTML"><span id="checkbox4"
                                            class="fas fa-check-circle check_style"></span>HTML</label></li>
                                <li><label id="check_area5"><input type="checkbox" name="learning" value="CSS"><span id="checkbox5"
                                            class="fas fa-check-circle check_style"></span>CSS</label></li>
                                <li><label id="check_area6"><input type="checkbox" name="learning" value="JavaScript"><span id="checkbox6"
                                            class="fas fa-check-circle check_style"></span>JavaScript</label></li>
                                <li><label id="check_area7"><input type="checkbox" name="learning" value="PHP"><span id="checkbox7"
                                            class="fas fa-check-circle check_style"></span>PHP</label></li>
                                <li><label id="check_area8"><input type="checkbox" name="learning" value="Laravel"><span id="checkbox8"
                                            class="fas fa-check-circle check_style"></span>Laravel</label></li>
                                <li><label id="check_area9"><input type="checkbox" name="learning" value="SQL"><span id="checkbox9"
                                            class="fas fa-check-circle check_style"></span>SQL</label></li>
                                <li><label id="check_area10"><input type="checkbox" name="learning" value="SHELL"><span
                                            id="checkbox10" class="fas fa-check-circle check_style"></span>SHELL</label></li>
                                <li><label id="check_area11"><input type="checkbox" name="learning" value="情報システム基礎知識"><span id="checkbox11" class="fas fa-check-circle check_style"></span>情報システム基礎知識（その他）</label></li>
                            </ul>
                        </div>

                    </div>
                    <!-- 右側のコンテンツ -->
                    <div id="modal_2nd">
                        <div>
                            <p class="modal_small_title">学習時間</p>
                            <input class="s_textbox" type="number" step="1" min="0" max="10">
                        </div>

                        <div>
                            <p class="modal_small_title">Twitter用コメント</p>
                            <textarea id="textarea" class="l_textbox" name="comments_twitter"></textarea>
                        </div>

                        <div class="confirm_twitter">
                            <p><label id="check_area12"><input id="twitter_box" type="checkbox" name="learning"><span id="checkbox12"
                                        class="fas fa-check-circle check_style"></span>Twitterにシェアする</label></p>
                        </div>
                    </div>

                    <!-- 投稿完了モーダル modal_area内、noneさせたいのはmodal_1st,right-->
                    <div id="awesome_area">
                        <div>
                            <img src="img/Awesome.png" alt="">
                        </div>
                        <p>記録・投稿</p>
                        <p>完了しました</p>
                    </div>

                    <div id="closeModal" class="closeModal">
                        ×
                    </div>


                </div>

                <button id="submit_info" class="submit__button2" target="_blank">記録・投稿</button>
            </form>
        </div>
    </section>
    <script src="chart1.js"></script>
    <script src="chart2.js"></script>
    <script src="chart3.js"></script>
    <script src="self_produce.js"></script>
</body>

</html>