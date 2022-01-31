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
                    <p class="number">3</p>
                    <p class="hour">hour</p>
                </section>
                <section>
                    <p class="subtitle">Month</p>
                    <p class="number">120</p>
                    <p class="hour">hour</p>
                </section>
                <section>
                    <p class="subtitle">Total</p>
                    <p class="number">1348</p>
                    <p class="hour">hour</p>
                </section>
            </div>
            <section class="bargraph">
                <div style="position: relative; height:auto; width:100%">
                    <canvas id="myBar2Chart">
                        <!-- グラフはここに差し込む -->
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
                        <!-- </div> -->
                    </canvas>
                </div>
                <!-- <ul class="each_language">
                    <li><span class="circle1"></span>JavaScript</li>
                    <li><span class="circle2"></span>CSS</li>
                    <li><span class="circle3"></span>PHP</li>
                    <li><span class="circle4"></span>HTML</li>
                    <li><span class="circle5"></span>Laravel</li>
                    <li><span class="circle6"></span>SQL</li>
                    <li><span class="circle7"></span>SHELL</li>
                    <li><span class="circle8"></span>情報system基礎知識 (others)</li>
                </ul> -->
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
                    <li><span class="circle1"></span>ドットインストール</li>
                    <li><span class="circle2"></span>N予備校</li>
                    <li><span class="circle3"></span>POSSE課題</li>
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