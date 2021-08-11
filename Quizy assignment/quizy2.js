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
    ['たかなわ','たかわ','こうわ',0],
    ['かめいど','かめど','かめど',0],
    ['こうじまち','おかとまち','かゆまち',0],
    ['おなりもん','おかどもん','ごせいもん',0],
    ['とどろき','たたら','たたりき',0],
    ['しゃくじい','いじい','せきこうい',0],
    ['ぞうしき','ざっしょく','ざっしき',0],
    ['おかちまち','ごしろちょう','みとちょう',0],
    ['ししぼね','しこね','ろっこつ',0],
    ['こぐれ','こしゃく','こばく',0],
];

for (let number = 0; number < 10; number++){
    let quizyContents=

     '<h2>'+'<span>'+(number+1)+'.この地名はなんて読む？</span>'+'</h2>'
    +'<p id="kuizy-font" class="words-center" >kuizy</p>'
    
       
        +'<p id="small-article" class="words-center" >#東京の難読地名クイズ</p>'
    
    +'<div id = "question-area1" class = "allQuestions">'+allQuestions[number]+'</div>'
        +'<ul class="list-arrange" id ='+(number+1)+'"choices-area1">'
            +'<li> <button onclick="makingTrueAnswerBox('+number+')" class="choices-arrange" id='+(number+1)+'"-choice1">'+allChoices[number][0]+'</button> </li>'
            +'<li> <button class="choices-arrange" id='+(number+1)+'"-choice2">'+allChoices[number][1]+'</button> </li>'
            +'<li> <button class="choices-arrange" id='+(number+1)+'"-choice3">'+allChoices[number][2]+'</button> </li>'
        +'</ul>'
    +'<div id ="result-area'+(number+1)+'" ></div>';
    
    document.currentScript.insertAdjacentHTML('beforebegin', quizyContents);
};




//正解の時の結果
function makingTrueAnswerBox(eachNumber){
    let resultDivided = document.getElementById("result-area"+(eachNumber+1));
    let buttonTrue = document.getElementById((eachNumber+1)+"-choice1")
    let buttonFalse1 = document.getElementById((eachNumber+1)+"-choice2")
    let buttonFalse2 = document.getElementById((eachNumber+1)+"-choice3")
    console.log(buttonTrue);
    //buttonTrue.classList.add('answer-color');
    
  //正解エリアの作成 
 
    let popUpTrue = document.createElement('p');
    popUpTrue.classList.add("underline");
    popUpTrue.innerText = '正解！';
     resultDivided.appendChild(popUpTrue);
 
     let trueExplain = document.createElement('p');
     trueExplain.className = "words-center";
     trueExplain.innerText = `正解は${allChoices[eachNumber][0]}です`;
     resultDivided.appendChild(trueExplain);
 
     resultDivided.classList.add('result-border');
     
 
     buttonTrue.classList.add("cannot-click");
     buttonFalse1.classList.add("cannot-click");
     buttonFalse2.classList.add("cannot-click");
     
 };
 

 //document.getElementById((eachNumber+1)+"-choice2")
   // document.getElementById((eachNumber+1)+"-choice3")