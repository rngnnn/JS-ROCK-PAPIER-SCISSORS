//& Seçim selectors

let yourCoiceDiv = document.getElementById("your-choice")
const pcCoiceDiv = document.getElementById("pc-choice")

//& message

const messagePar = document.querySelector(".message")


//& Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//& Variables
const userSelectImg = document.createElement("img")
const pcSelectImg = document.createElement("img")
let userSelection; //kullanıcının seçtiği
let pcRandom; // pc nin rastgele ürettiği
let pcArr = []; //pc seçim dizisi

//& Score
const scoreCardSection = document.querySelector(".score-card")


//! Selection
const selectionArticle = document.querySelector(".selection")

selectionArticle.addEventListener("click",(e)=>{
    userSelection = e.target.id

    if (userSelection) {
        userSelectImg.src = `./assets/${userSelection}.png`
        yourCoiceDiv.appendChild(userSelectImg)
        
    }

    createPCSelection()
    

})

const createPCSelection = () => {
    pcArr = ["rock", "paper", "scissor" ]
    // pcRandom =Math.floor(Math.random()*3) //1. yöntem
    pcRandom = pcArr[Math.trunc(Math.random()*3)]  //2. yöntem
    // console.log(pcRandom)
    pcSelectImg.src = `./assets/${pcRandom}.png`
    pcCoiceDiv.appendChild(pcSelectImg)

    calculateResult()

}

const calculateResult = () => {
    // console.log(userSelection , pcRandom)

    if (userSelection == pcRandom) {
        draw()
    }
}

const draw = () => {
    messagePar.textContent = "it's a draw";
    scoreCardSection.style.color = YELLOW;
    messagePar.style.backgroundColor = YELLOW

}