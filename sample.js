// var 比率円グラフPlugin = {
//     afterDatasetsDraw: function(chart) {
//         var ctx = chart.ctx;
//         chart.data.datasets.forEach(function(dataset, 系列) {
//             var meta = chart.getDatasetMeta(系列);
//             if (!meta.hidden) {
//                 meta.data.forEach(function(element, 要素) {
//                                                    // ステップ１　数値を文字列に変換
//                     var 要素値 = dataset.data[要素];
//                     var dataString = 要素値.toString();
//                     var 百分率 = "(" + 100/500*要素値.toFixed(1).toString() + "%)";
//                                                    // ステップ２　文字列の書体
//                     ctx.fillStyle = "black";            // 色　'rgb(0, 0, 0)', 'rgba(192, 80, 77, 0.7)'
//                     var fontSize = 14;                  // サイズ
//                     var fontStyle = "bold";           // 書体 "bold", "italic"
//                     var fontFamily = "sans-serif";           // フォントの種類 "sans-serif", "ＭＳ 明朝"
//                     ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
//                                                    // ステップ３　文字列の位置の基準点
//                     ctx.textAlign = 'center';           // 文字列　start, end, left, right, center
//                     ctx.textBaseline = 'middle';        // 文字高　middle, top, bottom
//                                                    // ステップ４　文字列のグラフでの位置
//                     var padding = 5;                   // 点と文字列の距離
//                     var position = element.tooltipPosition();
//                                                        //文字列の表示　 fillText(文字列, Ｘ位置, Ｙ位置)
//                     ctx.fillText(dataString, position.x, position.y - fontSize/2 - padding);    // 人数の表示
//                     ctx.fillText(百分率, position.x, position.y + fontSize/2);        // 

//                 });
//             }
//         });
//     }
// }
// function 比率円グラフ() {
//     var ctx = document.getElementById("myChart").getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: "pie", // グラフの種類 pie 円グラフ, doughnut ドーナッツチャート, polarArea 鶏頭図
//         data: {
//             labels:  ["賛成", "中間", "反対", "不明"],  // 軸のラベル
//             datasets: [
//                 {
//                     label: "質問Ａ",                                     // 不要 無視される
//                     data: [150, 200, 100, 50],                           // 100%になるよう自動調整される
//                     backgroundColor: ["lime", "yellow", "red", "silver"], // 円弧の塗りつぶし色
//                     borderColor: "black",                                // 境界線の色
//                     borderWidth: 2                                       // 境界線の幅
//                 }
//             ]
//         },
//         options: {
//             responsive: false,
//             title: {                 // 図のタイトル表示
//                 display: true,
//                 fontSize: 20,
//                 text: "比率円グラフ"
//             },
//             legend: {                // 凡例の表示位置
//                 position: 'right'
//             }
//         },
//         plugins: [比率円グラフPlugin]
//     });
// }
// ------------------------------------------------------------------------------------
// api load
google.load('visualization', '1.0', {'packages':['corechart']});

//callback
google.setOnLoadCallback(drawChart);

// グラフ用 function
function drawChart(){
	var data2 = new google.visualization.arrayToDataTable([
		['',''],
		['グループA',42],
		['グループB',18],
		['グループC',10],
		['グループD',10],
		['グループE',8],
		['グループF',6],
		['グループG',6],
	]);

	// var formatter2 = new google.visualization.NumberFormat({pattern:'#,###.0' + '万円'});
	// formatter2.format(data2,1);

	var options2 = {
		fontName:"sans-serif",
		chartArea:{width:'75%',height:'75%'},
		colors:['#444c5c','#ce5a57','#78a5a3','#e1b16a'],
		legend: {position:'bottom',textStyle:{fontSize:12}},
		tooltip:{
			textStyle:{bold:'true',fontSize:12}
		},
		pieSliceText:'percentage',
		pieSliceTextStyle:{fontSize:15},
        pieHole: 0.4,
		backgroundColor: 'transparent'
	};

	var chart2 = new google.visualization.PieChart(document.getElementById('Chart2'));
	chart2.draw(data2, options2);

}

google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7],
          ['star',    6],
          ['love',    4],
          ['like',    5]
        ]);

        var options = {
          title: 'My Daily Activities',
		  legend: {position:'top',maxLines: 2,textStyle:{fontSize:12}},
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
		
      }