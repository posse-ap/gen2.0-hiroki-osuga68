console.log("a");
function makingTrueAnswerBox(eachNumber, random, correctNumber){
  let buttonTrue = document.getElementById((eachNumber)+"_choice0");
  let buttonFalse1 = document.getElementById((eachNumber)+"_choice1");
  let buttonFalse2 = document.getElementById((eachNumber)+"_choice2");
  let correctArea = document.getElementById("correct_area"+(eachNumber));
  let falseArea = document.getElementById("false_area"+(eachNumber));
  // let resultArea = document.getElementById("result_area"+(eachNumber+1));
  console.log(buttonTrue);
  console.log(buttonFalse1);
  console.log(correctArea);
  
  correctArea.style.display = "none";

  if(random == correctNumber){
  // buttonTrueFalse.classList.add('answer-color');

  //正解エリアの作成 
  correctArea.style.display = "block";
   

  //  buttonTrueFalse.classList.add("cannot-click");
   buttonTrue.classList.add("cannot-click");
   buttonFalse1.classList.add("cannot-click");
   buttonFalse2.classList.add("cannot-click");
  }else{
    // buttonTrueFalse.classList.add('false-color');

  //不正解エリアの作成１
 
  // let failure1 = document.createElement('span');
  // failure1.className = 'underline2';
  // failure1.innerText = '不正解（泣）';
  // resultDivided.appendChild(failure1);

  // let trueExplain = document.createElement('p');
  // trueExplain.className ="words-center";
  // trueExplain.innerText = `正解は${allChoices[eachNumber].c[0]}です`;
  // resultDivided.appendChild(trueExplain);

  // resultDivided.classList.add('result-border');
  
  falseArea.style.display = "block";
  // buttonTrueFalse.classList.add("cannot-click");
  buttonTrue.classList.add("cannot-click");
  buttonFalse1.classList.add("cannot-click");
  buttonFalse2.classList.add("cannot-click");

  }
     
};
    

   
    
        
    