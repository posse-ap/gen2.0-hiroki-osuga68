let buttonTrue = document.getElementById("1-choice1");
let buttonFalse1 =document.getElementById('1-choice2');
let buttonFalse2 =document.getElementById('1-choice3');
const resultDivided = document.getElementById('result-area');


//正解の時の結果
function correctAnswer(){
   buttonTrue.style.color = '#ffffff'; 
    buttonTrue.classList.add('background-color');

    //正解エリアの作成
    
    let result = document.createElement('span');
    result.className = 'underline';
    result.innerText = '正解!';
    resultDivided.appendChild(result);

    let explain = document.createElement('p');
    explain.innerText = '正解は「たかなわ」です！';
    resultDivided.appendChild(explain);
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");
}
buttonTrue.addEventListener('click', correctAnswer);


//buttonFalse2.addEventListener('click', falseAnswer);

//不正解の時の結果
/*function falseAnswer(){
    buttonFalse1.style.color = '#ffffff'; 
    buttonFalse1.classList.add('background-color2');
    buttonFalse2.style.color = '#ffffff';
    buttonFalse2.classList.add('background-color2');
*/

//不正解の時の結果
buttonFalse1.onclick = function (){

    buttonTrue.style.color = '#ffffff'; 
    buttonTrue.classList.add('background-color');

    buttonFalse1.style.color = '#ffffff'; 
    buttonFalse1.classList.add('background-color2');
   
//不正解エリアの作成

    let failure1 = document.createElement('span');
    failure1.className = 'underline2';
    failure1.innerText = '不正解（泣）';
    resultDivided.appendChild(failure1);
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");

    console.log(failure);
    
}
//不正解の時の結果
buttonFalse2.onclick = function (){

    buttonTrue.style.color = '#ffffff'; 
    buttonTrue.classList.add('background-color');

    buttonFalse2.style.color = '#ffffff';
    buttonFalse2.classList.add('background-color2');
//不正解エリアの作成
    let failure2 = document.createElement('span');
    failure2.className = 'underline2';
    failure2.innerText = '不正解（泣）';
    resultDivided.appendChild(failure2);
    buttonTrue.classList.add("cannot-click");
    buttonFalse1.classList.add("cannot-click");
    buttonFalse2.classList.add("cannot-click");
}


    





