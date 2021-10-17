
// カレンダーのテキスト表示
var sample = document.getElementById('sample');
var fp = flatpickr(sample);


//modalの開閉
(function () {
    const modalArea = document.getElementById('modalArea');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');
    const modalBg = document.getElementById('modalBg');
    const toggle = [openModal,closeModal,modalBg];
    
    for(let i=0, len=toggle.length ; i<len ; i++){
      toggle[i].addEventListener('click',function(){
        
        
        modalArea.classList.toggle('is-show');
        
      },false);
    }
  }());

  // 投稿ボタン後に数秒loading
  const submit_info = document.getElementById('submit_info');

//   submit_info.onclick = function() {   
//   let spinner = document.getElementById('my-spinner');
//   let circle_border = document.getElementById('circle-border');
//   let circle_core = document.getElementById('circle-core');
//   // .box に .loaded を追加してローディング表示を消す
//   spinner.className = 'spinner-box';
//   spinner.classList.toggle('loaded');
//   circle_border.className = 'circle-border';
//   circle_core.className = 'circle-core';
//   console.log(submit_info);
// };
  

function show() {
  const modal_left = document.getElementById('modal_left');
  const modal_right = document.getElementById('modal_right');
  const awesome_area = document.getElementById('awesome_area');
  modal_left.style.display = "none";
  modal_right.style.display = "none";
  awesome_area.style.display = "block";
  submit_info.style.display = "none";

};

submit_info.onclick = function(){
  let spinner = document.getElementById('my-spinner');
  let circle_border = document.getElementById('circle-border');
  let circle_core = document.getElementById('circle-core');
  // .box に .loaded を追加してローディング表示を消す
  spinner.className = 'spinner-box';
  spinner.classList.toggle('loaded');
  circle_border.className = 'circle-border';
  circle_core.className = 'circle-core';
  console.log(submit_info);
   setTimeout(show, 2000);
};