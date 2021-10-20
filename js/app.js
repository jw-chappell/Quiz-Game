/*-------------------------------- Constants --------------------------------*/

import { getAnimeQuestions } from "../data/anime.js"


// import { getCartoonsQuestions } from "../data/cartoons.js"

// import { getComicsQuestions } from "../data/comics"

// import { getNflQuestions } from "../data/nfl.js"

/*---------------------------- Variables (state) ----------------------------*/

// need vairable for scoring, score, score mechanics, timer 

// Use array to represent the four categories 
let questions = []
let score 

/*------------------------ Cached Element References ------------------------*/

// const startButton = document.getElementById('start-btn')
// const topicContainer = document.querySelector('#topic-container')
const animeBtn = document.getElementById('anime-button')
const que = document.getElementById('question')
/*----------------------------- Event Listeners -----------------------------*/

// startBtn.addEventListener("click",startGame)
animeBtn.addEventListener("click", getQuestion)
// nflbtn.addEventListener("click",    )
// comicsbtn.addEventListener("click",    )
// cartoonsbtn.addEventListener("click",   )


/*-------------------------------- Functions --------------------------------*/
 
function getQuestion(evt) {
  const newQuestion = {
  source: evt.target.id === "anime-button", 
  question: evt.target.id === "anime-button" ? getAnimeQuestions(): console.log("type")
  } 
  questions.push(newQuestion)
  question.innerText = newQuestion.question
}