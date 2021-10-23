// カレンダーのテキスト表示
var sample = document.getElementById('sample');
var fp = flatpickr(sample);


//modalの開閉
(function () {
    const modalArea = document.getElementById('modalArea');
    const openModal = document.getElementById('openModal');
    const openModal_2 = document.getElementById('openModal_2');
    const closeModal = document.getElementById('closeModal');
    const modalBg = document.getElementById('modalBg');
    const toggle = [openModal,openModal_2,closeModal,modalBg];
    
    for(let i=0, len=toggle.length ; i<len ; i++){
      toggle[i].addEventListener('click',function(){                
        modalArea.classList.toggle('is-show');        
      },false);
    }
  }());

// 投稿ボタンのid読み込み
const submit_info = document.getElementById('submit_info');
// 投稿完了の表示をさせる関数の宣言
function showFinish() {
  const modal_left = document.getElementById('modal_left');
  const modal_right = document.getElementById('modal_right');
  const awesome_area = document.getElementById('awesome_area');
  modal_left.style.display = "none";
  modal_right.style.display = "none";
  awesome_area.style.display = "block";
  submit_info.style.display = "none";
};
// 投稿ボタンを押した際、最初にloadingし、2秒後に投稿完了の表示をさせる
submit_info.onclick = function(){
  // loadingを表示させる
  let spinner = document.getElementById('my-spinner');
  let circle_border = document.getElementById('circle-border');
  let circle_core = document.getElementById('circle-core');
  spinner.className = 'spinner-box';
  circle_border.className = 'circle-border';
  circle_core.className = 'circle-core';
  // .loaded を追加してローディング表示を消す
  spinner.classList.toggle('loaded');
  console.log(submit_info);
   setTimeout(showFinish, 2000);
};

// クリックした際にチェックボックスの色、各項目の背景色を変える
// font awesomeでチェックボックス使っちゃたから余計な苦労してる説アリ
function coloringCheckbox(i){
  let checkbox = document.getElementById(`checkbox${i+1}`);
  let check_area = document.getElementById(`check_area${i+1}`);
  
  checkbox.onclick = function(){
    checkbox.classList.toggle('check_style_click');
    check_area.classList.toggle('check_area_click');
  };
};
for(i=0; i<8; i++){
  coloringCheckbox(i);
};

// console.log(document.getElementById("myChart"));