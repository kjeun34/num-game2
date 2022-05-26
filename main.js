let computerNum = 0 ;
let palyButton = document.getElementById("paly-button")
let userInput= document.getElementById("user-input")
let resultArea= document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history =[]

palyButton.addEventListener("click",paly)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){
  userInput.value = "";
})


function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100 ) + 1;
  console.log("정답",computerNum);
}


function paly(){
  let userValue = userInput.value

  if(userValue<1 || userValue>100){
    resultArea.textContent="1과 100사이 숫자만 입력해주세요"
    return;
  }

  if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다. 다른숫자를 입력해주세요ㅠ"
    return;
  }

  chances--;
  chanceArea.textContent= `남은기회:${chances}번`
  console.log("chances",chances)

  if(userValue < computerNum){
    resultArea.textContent="UP!!!!"
  }else if(userValue > computerNum){
    resultArea.textContent = "Down!!!!"
  }else{
    resultArea.textContent = "맞추셨습니다!!!!"
    gameOver = true
  }

  history.push(userValue)
  console.log(history)

  if(chances < 1) {
    gameOver = true ;
  }

  if(gameOver == true){
    palyButton.disabled = true ;
  }
}

function reset(){
  userInput.value = ""
  pickRandomNum()

  resultArea.textContent="결과값이 여기 나옵니다!"
}


pickRandomNum();