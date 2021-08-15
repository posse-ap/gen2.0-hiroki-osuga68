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
    ['たかなわ','たかわ','こうわ'],
    ['かめいど','かめと','かめど'],
    ['こうじまち','おかとまち','かゆまち'],
    ['おなりもん','おかどもん','ごせいもん'],
    ['とどろき','たたら','たたりき'],
    ['しゃくじい','いじい','せきこうい'],
    ['ぞうしき','ざっしょく','ざっしき'],
    ['おかちまち','ごしろちょう','みとちょう'],
    ['ししぼね','しこね','ろっこつ'],
    ['こぐれ','こしゃく','こばく'],
];

const shuffledAllChoices = allChoices;
console.log(shuffledAllChoices);
shuffledAllChoices.map(shuffle);

for (let number = 0; number < allQuestions.length; number++){
    let quizyContents=

     `<h2><span>${number+1}.この地名はなんて読む？</span></h2>`
    +'<p id="kuizy-font" class="words-center">kuizy</p>'
    
       
        +'<p id="small-article" class="words-center">#東京の難読地名クイズ</p>'
    
    +'<div id ="question-area1" class="allQuestions">'+allQuestions[number]+'</div>'
        +'<ul class="list-arrange">'
            +`<li><button onclick="makingTrueAnswerBox(${number})" class="choices-arrange" id="${number+1}-choice1">${allChoices[number][0]}</button></li>`
            +`<li><button onclick="makingFalse1AnswerBox(${number})" class="choices-arrange" id="${number+1}-choice2">${allChoices[number][1]}</button></li>`
            +`<li><button onclick="makingFalse2AnswerBox(${number})" class="choices-arrange" id="${number+1}-choice3">${allChoices[number][2]}</button></li>`
        +'</ul>'
    +`<div id ="result-area${number+1}"></div>`;
    
    document.currentScript.insertAdjacentHTML('beforebegin', quizyContents);
};

//シャッフル関数
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) { // i = ランダムに選ぶ終点のインデックス
      const j = Math.floor(Math.random() * (i + 1));  // j = 範囲内から選ぶランダム変数
      [arr[j], arr[i]] = [arr[i], arr[j]]; // 分割代入 i と j を入れ替える
    }
    console.log(arr);
    return arr;
  };
  console.log(allChoices);

  //const shuffledChoices = shuffle([...allChoices]);

  
//正解の時の結果
 function makingTrueAnswerBox(eachNumber){
    if(allChoices[eachNumber] == allChoices[eachNumber][0]){
    let resultDivided = document.getElementById("result-area"+(eachNumber+1));
    let buttonTrue = document.getElementById((eachNumber+1)+"-choice1");
    let buttonFalse1 = document.getElementById((eachNumber+1)+"-choice2");
    let buttonFalse2 = document.getElementById((eachNumber+1)+"-choice3");
    console.log(buttonTrue);
    buttonTrue.classList.add('answer-color');
    //allChoices[eachNumber][0].id = document.getElementById((eachNumber+1)+"-choice1");
    //console.log(allChoices[eachNumber][0]);
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
    }
     
 };
 
 //不正解の時の結果１
function makingFalse1AnswerBox(eachNumber){
    let resultDivided = document.getElementById("result-area"+(eachNumber+1));
    let buttonTrue = document.getElementById((eachNumber+1)+"-choice1");
    let buttonFalse1 = document.getElementById((eachNumber+1)+"-choice2");
    let buttonFalse2 = document.getElementById((eachNumber+1)+"-choice3");
    buttonTrue.classList.add('answer-color');
    
    buttonFalse1.classList.add('false-color');
   
    //不正解エリアの作成１
   
    let failure1 = document.createElement('span');
    failure1.className = 'underline2';
    failure1.innerText = '不正解（泣）';
    resultDivided.appendChild(failure1);

    let trueExplain = document.createElement('p');
    trueExplain.innerText = `正解は${allChoices[eachNumber][0]}です`;
    resultDivided.appendChild(trueExplain);

    resultDivided.classList.add('result-border');
    
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");
    
};

 //不正解の時の結果2
 function makingFalse2AnswerBox(eachNumber){
    let resultDivided = document.getElementById("result-area"+(eachNumber+1));
    let buttonTrue = document.getElementById((eachNumber+1)+"-choice1");
    let buttonFalse1 = document.getElementById((eachNumber+1)+"-choice2");
    let buttonFalse2 = document.getElementById((eachNumber+1)+"-choice3");
    buttonTrue.classList.add('answer-color');
    
    buttonFalse2.classList.add('false-color');
   
    //不正解エリアの作成2
   
    let failure1 = document.createElement('span');
    failure1.className = 'underline2';
    failure1.innerText = '不正解（泣）';
    resultDivided.appendChild(failure1);

    let trueExplain = document.createElement('p');
    trueExplain.innerText = `正解は${allChoices[eachNumber][0]}です`;
    resultDivided.appendChild(trueExplain);

    resultDivided.classList.add('result-border');
    
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");
    
};

//let buttonsFalse = document.getElementsByClassName((eachNumber+1)+"-choice_false");
    //buttonsFalse = array.from(buttonsFalse);
    //buttonsFalse.forEach(function(element){console.log(element);});