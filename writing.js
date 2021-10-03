
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

  for (let number = 0; number < allQuestions.length; number++){
    let quizyContents =

     `<h2><span>${number+1}.この地名はなんて読む？</span></h2>`
    +'<p id="kuizy-font" class="words-center">kuizy</p>'
    
       
        +'<p id="small-article" class="words-center">#東京の難読地名クイズ</p>'
    
    +'<div id ="question-area1" class="allQuestions">'+allQuestions[number]+'</div>'
        +`<ul id= choices${number} class="list-arrange">`
            // +`<li><button onclick="makingTrueAnswerBox(${number})" class="choices-arrange" id="${number+1}-choice1">${allChoices[number].c}</button></li>`
            // +`<li><button onclick="makingFalse1AnswerBox(${number})" class="choices-arrange" id="${number+1}-choice2">${allChoices[number][1]}</button></li>`
            // +`<li><button onclick="makingFalse2AnswerBox(${number})" class="choices-arrange" id="${number+1}-choice3">${allChoices[number][2]}</button></li>`
        +'</ul>'
    +`<div id ="result-area${number+1}"></div>`;
    
    document.currentScript.insertAdjacentHTML('beforebegin', quizyContents);
};



  const question = document.getElementById('question');
  const btn = document.getElementById('btn');
  //const choices = document.getElementById('choices');

 

   
 // let currentNum = 0;

  //question.textContent = allChoices[currentNum].q;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[j], array[i]] = [array[i], array[j]];
    }
    return array;
  }
  function setQuiz(currentNum){
  console.log(allChoices[currentNum].c[0]);
  const choices = document.getElementById('choices'+(currentNum));
  const shuffledChoices = shuffle([...allChoices[currentNum].c]);
//   console.log(allChoices[currentNum].c);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.className = ('choices-arrange');
    li.textContent = choice;
    console.log(choice);
    
    li.addEventListener('click',function checkAnswer(li) {
    if (li.textContent === allChoices[currentNum].c[0]) {
      console.log('correct');
    } else {
      console.log('wrong');
      console.log(allChoices[currentNum].c[0]);
    }
  });
    choices.appendChild(li);
  });
 };

for(currentNum=0; currentNum<10; currentNum++){
  setQuiz(currentNum);
};


    // function plus1(a, b, id){
    //     document.getElementById(id).innerHTML = a + b;
    //     return a + b;
    // }
    // plus1(3,4,"hoge");
       
     /*function plus(a, b){
        // document.getElementById(id).innerHTML = a + b;
        return a + b;
        
    }
    function elementInId(id, element){
        document.getElementById(id).innerHTML = element;
    }
    function trapezoid_area (upper, lower, height){
        let area = plus(upper, lower)*height/2;
        return area;
    }
    elementInId("hoge", trapezoid_area(3, 2, 4));
    elementInId("piyo", plus(8, 3));*/

    
    
    
   // plus(3, 5, "hoge");

   
    
        
    