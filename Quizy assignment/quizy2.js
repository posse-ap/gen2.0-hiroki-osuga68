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

/*const allChoices =[
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
];*/
const allChoices = [
    {c: ['たかなわ', 'たかわ', 'こうわ']},
    {c: ['かめいど', 'かめど', 'かめど']},
    {c: ['こうじまち', 'おかじまち', 'かゆまち']},
    {c: ['おなりもん', 'おかどまち', 'ごせいもん']},
    {c: ['とどろき', 'たたら', 'たたりき']},
    {c: ['しゃくじい', 'いじい', 'せきこうい']},
    {c: ['ぞうしき', 'ざっしょく', 'ざっしき']},
    {c: ['おかちまち','ごしろちょう','みとちょう']},
    {c: ['ししぼね','しこね','ろっこつ']},
    {c: ['こぐれ','こしゃく','こばく']},
  ];

const randomNumber = ['0', '1', '2'];

  for(currentNum = 0; currentNum < 10; currentNum++){

  //let shuffledAllChoices =shuffle([...allChoices[currentNum].c]);
  
 
//console.log("元の配列", allChoices);

//let shuffledAllChoices = [...allChoices];
//let shuffledAllChoices =Object.assign(allChoices);
//let shuffledAllChoices =allChoices.slice();
 //shuffledAllChoices[0][0] = "hoge";
//console.log("コピーした配列", shuffledAllChoices[0])
;};
//shuffledAllChoices.map(shuffle);



//シャッフル関数
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) { // i = ランダムに選ぶ終点のインデックス
      const j = Math.floor(Math.random() * (i + 1));  // j = 範囲内から選ぶランダム変数
      [arr[j], arr[i]] = [arr[i], arr[j]]; // 分割代入 i と j を入れ替える
    }
    //console.log(arr);
    return arr;
  };



for (let number = 0; number < allQuestions.length; number++){
  //shuffle(randomNumber);
  //console.log(randomNumber);
  let quizyContents =
  
  `<h2><span>${number+1}.この地名はなんて読む？</span></h2>`
  +'<p id="kuizy-font" class="words-center">kuizy</p>'
  
  
  +'<p id="small-article" class="words-center">#東京の難読地名クイズ</p>'
  
  +'<div id ="question-area1" class="allQuestions">'+allQuestions[number]+'</div>'
  +'<ul class="list-arrange">'
  
  shuffle(randomNumber);
        randomNumber.forEach(function (element){
          console.log(element);
          quizyContents = quizyContents +`<li><button onclick="makingTrueAnswerBox(${number}, ${element})" class="choices-arrange" id="${number+1}-choice${element}">${allChoices[number].c[element]}</button></li>`
        });  
quizyContents = quizyContents 
  +'</ul>'
  +`<div id ="result-area${number+1}"></div>`;
    
    document.currentScript.insertAdjacentHTML('beforebegin', quizyContents);
};

              
  
//正解の時の結果

 function makingTrueAnswerBox(eachNumber, random){
   
   
    let resultDivided = document.getElementById("result-area"+(eachNumber+1));
    //let buttonTrue = document.getElementById(`${eachNumber+1}-choice${random}`);
    let buttonTrueFalse = document.getElementById((eachNumber+1)+"-choice"+random);
    let buttonTrue = document.getElementById((eachNumber+1)+"-choice0");
    let buttonFalse1 = document.getElementById((eachNumber+1)+"-choice1");
    let buttonFalse2 = document.getElementById((eachNumber+1)+"-choice2");
    
    console.log(resultDivided);
    //console.log("ボタンを押したときに取得できるid", `${eachNumber+1}-choice${random}`);
    console.log("ボタンを押したときに取得できるid", (eachNumber+1)+"-choice"+random);
    console.log(buttonTrueFalse);

    if(random==0){
    buttonTrueFalse.classList.add('answer-color');
  
    //正解エリアの作成 
 
    let popUpTrue = document.createElement('p');
    popUpTrue.classList.add("underline");
    popUpTrue.innerText = '正解！';
     resultDivided.appendChild(popUpTrue);
 
     let trueExplain = document.createElement('p');
     trueExplain.className = "words-center";
     trueExplain.innerText = `正解は${allChoices[eachNumber].c[0]}です`;
     resultDivided.appendChild(trueExplain);
 
     resultDivided.classList.add('result-border');
     
 
     buttonTrueFalse.classList.add("cannot-click");
     buttonTrue.classList.add("cannot-click");
     buttonFalse1.classList.add("cannot-click");
     buttonFalse2.classList.add("cannot-click");
    }else{
      buttonTrueFalse.classList.add('false-color');

    //不正解エリアの作成１
   
    let failure1 = document.createElement('span');
    failure1.className = 'underline2';
    failure1.innerText = '不正解（泣）';
    resultDivided.appendChild(failure1);

    let trueExplain = document.createElement('p');
    trueExplain.className ="words-center";
    trueExplain.innerText = `正解は${allChoices[eachNumber].c[0]}です`;
    resultDivided.appendChild(trueExplain);

    resultDivided.classList.add('result-border');
    
    buttonTrueFalse.classList.add("cannot-click");
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");

    }
       
 };
 
 