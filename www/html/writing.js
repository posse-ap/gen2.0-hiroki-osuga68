/* 配列の作り方とhtml出力の方法は以前のやつベース、不必要なクラスやidはなるべく削った。
html生成は選択肢の部分で大幅に変更、それに伴い選択肢のクリックイベントも変更。*/

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
const allChoices = [
    {c: ['たかなわ', 'たかわ', 'こうわ']},
    {c: ['かめいど', 'かめど', 'かめと']},
    {c: ['こうじまち', 'おかじまち', 'かゆまち']},
    {c: ['おなりもん', 'おかどまち', 'ごせいもん']},
    {c: ['とどろき', 'たたら', 'たたりき']},
    {c: ['しゃくじい', 'いじい', 'せきこうい']},
    {c: ['ぞうしき', 'ざっしょく', 'ざっしき']},
    {c: ['おかちまち','ごしろちょう','みとちょう']},
    {c: ['ししぼね','しこね','ろっこつ']},
    {c: ['こぐれ','こしゃく','こばく']},
  ];

  for (let number = 0; number < allQuestions.length; number++){
    let quizyContents =

     `<h2 class="outline"><span>${number+1}.この地名はなんて読む？</span></h2>`
    +'<p class="kuizy-font">kuizy</p>'
    
       
        +'<p class="small-article">#東京の難読地名クイズ</p>'
    
    +'<div id ="question-area1" class="allQuestions">'+allQuestions[number]+'</div>'
        +`<ul id= choices${number} class="list-arrange">`
          // liタグ（選択肢３つ）を下記の関数で生成していく
        +'</ul>'
    +`<div id ="result-area${number+1}"></div>`;
    
    document.getElementById('main').insertAdjacentHTML('beforeend', quizyContents);
};

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[j], array[i]] = [array[i], array[j]];
    }
    return array;
  }

  // 関数setQuizでは選択肢を生成し、その選択肢が押された後のイベント処理を行い、最後に親要素を基に選択肢を追加する
  function setQuiz(currentNum){
  // 選択肢の生成
  const choices = document.getElementById('choices'+(currentNum));
  const shuffledChoices = shuffle([...allChoices[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.className = ('choices-arrange');
    li.textContent = choice;

    // 正誤判定と正解エリアの作成
    li.addEventListener('click',function checkAnswer() {
    //↓正解エリアをポップアップさせる場所のid取得
    let resultDivided = document.getElementById("result-area"+(currentNum+1));
    // 正解時、不正解時で場合分け
    if (choice === allChoices[currentNum].c[0]) {
      // console.log('correct');
      li.classList.add('correct');
    　let popUpTrue = document.createElement('p');
    　popUpTrue.classList.add("underline");
    　popUpTrue.innerText = '正解！';
     resultDivided.appendChild(popUpTrue);
 
     let trueExplain = document.createElement('p');
     trueExplain.innerText = `正解は${allChoices[currentNum].c[0]}です`;
     resultDivided.appendChild(trueExplain);
     resultDivided.classList.add('result-border');
    } else {
      // console.log('wrong');
      li.classList.add('wrong');
    　let popUpTrue = document.createElement('p');
    　popUpTrue.classList.add("underline2");
    　popUpTrue.innerText = '不正解…';
     resultDivided.appendChild(popUpTrue);
 
     let trueExplain = document.createElement('p');
     trueExplain.innerText = `正解は${allChoices[currentNum].c[0]}です`;
     resultDivided.appendChild(trueExplain);
     resultDivided.classList.add('result-border');
    }
    choices.style.pointerEvents = 'none';
  });
  // 生成した選択肢を親要素choices下に追加
    choices.appendChild(li);
  });
 };

for(currentNum=0; currentNum<10; currentNum++){
  // 10回分、関数setQuizを呼び出す。
  setQuiz(currentNum);
};

console.log("aa");
    

   
    
        
    