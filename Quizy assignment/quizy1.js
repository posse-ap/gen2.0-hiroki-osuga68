let buttonTrue = document.getElementById("1-choice1");
let buttonFalse1 = document.getElementById('1-choice2');
let buttonFalse2 = document.getElementById('1-choice3');
let resultDivided = document.getElementById('result-area');


//正解の時の結果...こちらはaddEventListenerでイベント指定してみた
function correctAnswer(){
   buttonTrue.style.color = '#ffffff'; 
    buttonTrue.classList.add('background-color');

 //正解エリアの作成 

   let explain = document.createElement('p');
    explain.classList.add("underline");
    explain.innerText = '正解！';
    resultDivided.appendChild(explain);

    let explain2 = document.createElement('p');
    explain2.innerText = '正解は「たかなわ」です';
    resultDivided.appendChild(explain2);

    resultDivided.classList.add('result-border');
    

    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");
    
}
buttonTrue.addEventListener('click', correctAnswer);


//不正解の時の結果１...不正解のほうはonclickを用いて関数を起動させてみた
buttonFalse1.onclick = function (){

    buttonTrue.style.color = '#ffffff'; 
    buttonTrue.classList.add('background-color');

    buttonFalse1.style.color = '#ffffff'; 
    buttonFalse1.classList.add('background-color2');
   
//不正解エリアの作成１

    
    let failure1 = document.createElement('span');
    failure1.className = 'underline2';
    failure1.innerText = '不正解（泣）';
    resultDivided.appendChild(failure1);

    let explain2 = document.createElement('p');
    explain2.innerText = '正解は「たかなわ」です';
    resultDivided.appendChild(explain2);

    resultDivided.classList.add('result-border');
    
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");
    
}
//不正解の時の結果２...不正解のほうはonclickを用いて関数を起動させてみた
buttonFalse2.onclick = function (){

    buttonTrue.style.color = '#ffffff'; 
    buttonTrue.classList.add('background-color');

    buttonFalse2.style.color = '#ffffff';
    buttonFalse2.classList.add('background-color2');

//不正解エリアの作成２

    let failure2 = document.createElement('span');
    failure2.className = 'underline2';
    failure2.innerText = '不正解（泣）';
    resultDivided.appendChild(failure2);

    let explain2 = document.createElement('p');
    explain2.innerText = '正解は「たかなわ」です';
    resultDivided.appendChild(explain2);

    resultDivided.classList.add('result-border');
    
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");
}


    
/**
 * <h1><span>1.この地名はなんて読む？</span></h1>

<p id="kuizy-font" class="choices-center" >kuizy</p>
<p id="question" class="choices-center" >高輪</p>
<p id="small-article" class="choices-center" >#東京の難読地名クイズ</p>

<ul class="list-arrange"> 
     <li > <button type="button" class="choices-arrange" id="1-choice1">たかなわ</button></li>

     <li > <button type="button" class="choices-arrange" id="1-choice2">たかわ</button></li>
        
     <li > <button type="button" class="choices-arrange" id="1-choice3">こうわ</button></li>
    
</ul>

<div id ="result-area" ></div>*/


const allQuestions =[
    '高輪',
    '亀戸',
    '麹町',
    '御成門',
    '等々力',
    '石神井',
    '雑色',
    '御徒町',
    '鹿骨',
    '小榑',
];



for(let i = 0; i <allQuestions.length; i++){
 const eachQuestion = document.getElementById('question');
 eachQuestion.innerHTML = allQuestions[1];
}