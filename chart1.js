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
              data: [2, 1, 3, 5, 2, 3, 5, 7, 5, 4, 3, 6, 8, 7, 4, 7, 5, 2, 6, 3, 5, 2, 3, 5, 7, 6, 4, 3, 1, 4]
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