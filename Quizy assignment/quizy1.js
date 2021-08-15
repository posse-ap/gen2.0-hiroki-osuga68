/*for (let number= 0; number < 10; number++){
    let quizyContents=

+'<h1><span>'+(number+1)+'.この地名はなんて読む？</span></h1>'
    +'<p id="kuizy-font" class="choices-center" >kuizy</p>'
    
       
        +'<p id="small-article" class="choices-center" >#東京の難読地名クイズ</p>'
    
    +'<div id = "question-area1">'+allQuestions[number]+'</div>'
    +'<ul class="list-arrayange" id ='+(number+1)+'"choices-area1">'
         +'<li id = "1-choices-area1"> <button type="button" class="choices-arrayange" id='+(number+1)+'"-choice1">'+AllChoices[number][0]+'</button></li>'
         +'<li id = "1-choices-area2"> <button type="button" class="choices-arrayange" id='+(number+1)+'"-choice2">'+AllChoices[number][1]+'</button></li>'
         +'<li id = "1-choices-area3"> <button type="button" class="choices-arrayange" id='+(number+1)+'"-choice3">'+AllChoices[number][2]+'</button></li>'

    +'</ul>';
    
    document.currentScript.insertAdjacentHTML('beforebegin', quizyContents);
};
*/







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


//jsでのhtml生成

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

const allChoices =[
    ['たかわ','こうわ','たかなわ',2],
    ['かめど','かめいど','かめど',1],
    ['こうじまち','おかとまち','かゆまち',0],
    ['おかどもん','おなりもん','ごせいもん',1],
    ['たたら','とどろき','たたりき',1],
    ['しゃくじい','いじい','せきこうい',0],
    ['ざっしょく','ざっしき','ぞうしき',2],
    ['おかちまち','ごしろちょう','みとちょう',0],
    ['ししぼね','しこね','ろっこつ',0],
    ['こしゃく','こぐれ','こばく',1],
];



function makingQuestions (i){
    let questionAreas = document.getElementById("question-area" + (i+1));
    let newQuestions = document.createElement("p");
    newQuestions.className = "allQuestions";
    newQuestions.innerHTML = allQuestions[i];
    questionAreas.appendChild(newQuestions);

};

for(let i = 0; i <allQuestions.length; i++){
   makingQuestions(i);
};

function makingChoices (i){
    let choicesAreas_1 = document.getElementById((i+1) + "-choices-area1");
    let choicesAreas_2 = document.getElementById((i+1) + "-choices-area2");
    let choicesAreas_3 = document.getElementById((i+1) + "-choices-area3");
    let newChoices_1 = document.createElement("button");
    let newChoices_2 = document.createElement("button");
    let newChoices_3 = document.createElement("button");
    newChoices_1.className = "choices-arrayange";
    newChoices_2.className = "choices-arrayange";
    newChoices_3.className = "choices-arrayange";
    newChoices_1.id = "(i+1) + -choices +1)";
    newChoices_2.id = "(i+1) + -choices +2)";
    newChoices_3.id = "(i+1) + -choices +3)";
    newChoices_1.innerHTML = allChoices[i][0];
    newChoices_2.innerHTML = allChoices[i][1];
    newChoices_3.innerHTML = allChoices[i][2];
    

    choicesAreas_1.appendChild(newChoices_1);
    choicesAreas_2.appendChild(newChoices_2);
    choicesAreas_3.appendChild(newChoices_3);
};

for(let i = 0; i<allChoices.length; i++){
    makingChoices(i);
};
   
/*const arrayay_10 =[];
for (let i = 1; i <= 10; i++){
    arrayay_10.push(document.getElementById("question-" + i));
}
console.log(arrayay_10);*/

 






