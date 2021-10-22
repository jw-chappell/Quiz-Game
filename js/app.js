/*-------------------------------- Constants --------------------------------*/

import { getAnimeQuestions } from "../data/anime.js"

import { getCartoonsQuestions } from "../data/cartoons.js"

import { getComicsQuestions } from "../data/comics.js"

import { getNflQuestions } from "../data/nfl.js"

/*---------------------------- Variables (state) ----------------------------*/

// need vairable for scoring, score, score mechanics, timer 

// Use array to represent the four categories 
const cat = []


/*------------------------ Cached Element References ------------------------*/

const startBtn = document.querySelector('#start-btn')
const nextBtn = document.querySelector('#next-btn')
const topicContainer = document.querySelector('#topic-container')
const animeBtn = document.querySelector("#anime-button")
const nflBtn = document.querySelector("#nfl-button")
const comicsBtn = document.querySelector("#comics-button")
const cartoonsBtn = document.querySelector("#cartoons-button")
// const textBox = document.querySelector('#question-container')
const questionContainer = document.querySelector('#question-container')
const question = document.querySelector('#question')
const answer1 = document.querySelector('#answer-1')
const answer2 = document.querySelector('#answer-2')
const answer3 = document.querySelector('#answer-3')
const answer4 = document.querySelector('#answer-4')

/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click',startGame)
animeBtn.addEventListener("click",animeB)
// () => {
//   const animeQuestions = {
//     source: "Anime Questions",
//     questions: getAnimeQuestions(),
//   }
//  cat.push(animeQuestions)
//  question.innerText = cat[0].questions.question
//  answer1.innerText = cat[0].questions.choices[0]
//  answer2.innerText = cat[0].questions.choices[1]
//  answer3.innerText = cat[0].questions.choices[2]
//  answer4.innerText = cat[0].questions.choices[3]
//   // textBox.innerText = "anime" 
// })

nflBtn.addEventListener("click", () => {
  const nflQuestions = {
    source: "NFL Questions",
    questions: getNflQuestions(),
  }
 cat.push(nflQuestions)
 question.innerText = cat[0].questions.question
 answer1.innerText = cat[0].questions.choices[0]
 answer2.innerText = cat[0].questions.choices[1]
 answer3.innerText = cat[0].questions.choices[2]
 answer4.innerText = cat[0].questions.choices[3]
  // textBox.innerText = "NFL" 
})

comicsBtn.addEventListener("click", () => {
  const comicsQuestions = {
    source: "Comics Questions",
    questions: getComicsQuestions(),
  }
  cat.push(comicsQuestions)  
  question.innerText = cat[0].questions.question
  answer1.innerText = cat[0].questions.choices[0]
  answer2.innerText = cat[0].questions.choices[1]
  answer3.innerText = cat[0].questions.choices[2]
  answer4.innerText = cat[0].questions.choices[3]
  // textBox.innerText = "Comics" 
})

cartoonsBtn.addEventListener("click", () => {
  const cartoonsQuestions = {
    source: "Cartoons Questions",
    questions: getCartoonsQuestions(),
  }
  cat.push(cartoonsQuestions)  
  question.innerText = cat[0].questions.question
  answer1.innerText = cat[0].questions.choices[0]
  answer2.innerText = cat[0].questions.choices[1]
  answer3.innerText = cat[0].questions.choices[2]
  answer4.innerText = cat[0].questions.choices[3]
})


/*-------------------------------- Functions --------------------------------*/
 
function startGame() {
  startBtn.style.display = 'none';
	topicContainer.classList.remove('hide');
  // nextBtn.style.display = 'none';
}

  function animeB(evt) {
    const animeQuestions = {
      source: evt.target.id === "anime-button",
      questions: evt.target.id === "anime-button" ? getAnimeQuestions(): console.log("anime")
  } 
  cat.push(animeQuestions)
  console.log(question) 
  }

 

  // function appearQuestion(evt) {
  //   const nflQuestions = {
  //     source: evt.target.id === "nfl-button",
  //     questions: evt.target.id === "nfl-button" ? getNflQuestions(): console.log("nfl")
  // }
  // question.push(nflQuestions)
  // console.log(question);
  // }

// function getQuestion(evt) {
//   const newQuestion = {
//   source: evt.target.id === "anime-button", 
//   question: evt.target.id === "anime-button" ? getNflQuestions(): console.log("type")
//   } 
//   questions.push(newQuestion)
//   question.innerText = newQuestion.question 
// }


