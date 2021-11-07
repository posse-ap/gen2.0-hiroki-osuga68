
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
        labels: ["JavaScript", "CSS", "PHP", "HTML", "Laravel", "SQL", "SHELL", "情報system基礎知識（その他）"],
        datasets: [{
            label: "学習言語",
            backgroundColor: ["#0b03fc", "#1077a3", "#19b4c2", "#86c2db", "#b6a3d1", "#7250ab", "#4d0fb8", "#2f0b6e"],
            data: [50, 50, 40, 52, 47, 46, 26, 20],
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

// if( window.matchMedia('(max-width: 749px)').matches) {
//     dataLabelPlugin.length = 0;
//     console.log(dataLabelPlugin);
//   };
// if (matchMedia('only screen and (max-width: 767px)').matches) {    
//     //スマホ・タブレットの時の処理
//     // dataLabelPlugin;
//     };

//-------------------------------------------------------------------------------------------- 
// document.addEventListener('touchmove', function() {}, {passive: true});
// google.charts.load("current", {packages:["corechart"]});
//       google.charts.setOnLoadCallback(drawChart);
//       function drawChart() {
//         var data = google.visualization.arrayToDataTable([
//           ['Task', 'Hours per Day'],
//           ['JavaScript',     42],
//           ['CSS',      33],
//           ['PHP',  20],
//           ['HTML',  18],
//           ['Laravel',  15],
//           ['SQL',  12],
//           ['SHELL',  10],
//           ['情報system基礎知識（その他）',  5]

          
//         ]);

//         var options = {
//         //   title: 'My Daily Activities',
// 		  legend: {position:'none',maxLines: 2,textStyle:{fontSize:12}},
//           pieHole: 0.4,
//           colors: ['#0b03fc', '#1077a3', '#19b4c2', '#86c2db', "#b6a3d1", "#7250ab", "#4d0fb8", "#2b1ba1"]  //色設定
//         };

//         var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
//         chart.draw(data, options);
		
//       }
//        // onReSizeイベント    
//   window.onresize = function(){
    
//     drawChart();
    
//   }