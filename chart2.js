// グラフのタイプとか値とかを設定
let config = {
   type: "doughnut",
   data: {
       labels: ["docomo", "au", "softbank", "other"],
       datasets: [{
           data: [39.9, 27.4, 22.3, 10.4],
           backgroundColor: [
               "rgb(255, 99, 132)",
               "rgb(255, 159, 64)",
               "rgb(240, 240, 240)",
               "rgb(54, 162, 235)"
           ]
       }],
   },
   options: {
      responsive: false,
      plugins: {
          datalabels: {
              color: '#000',
              font: {
                  weight: 'bold',
                  size: 20,
              },
              formatter: (value, ctx) => {
                  return value + '%';
              },
          }
      }
  }
};

// チャートの生成
window.addEventListener("load", function() {
   let ctx = document.getElementById("myChart").getContext("2d");
   myChart = new Chart(ctx, config);
}, false);