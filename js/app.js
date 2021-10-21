/*-------------------------------- Constants --------------------------------*/

import { getAnimeQuestions } from "../data/anime.js"

import { getCartoonsQuestions } from "../data/cartoons.js"

import { getComicsQuestions } from "../data/comics.js"

import { getNflQuestions } from "../data/nfl.js"

/*---------------------------- Variables (state) ----------------------------*/

// need vairable for scoring, score, score mechanics, timer 

// Use array to represent the four categories 
const question = []


/*------------------------ Cached Element References ------------------------*/


const animeBtn = document.querySelector("#anime-button")
const nflBtn = document.querySelector("#nfl-button")
const comicsBtn = document.querySelector("#comics-button")
const cartoonsBtn = document.querySelector("#cartoons-button")
// const textBox = document.querySelector('#question-container')
const questionContainer = document.querySelector('#question-container')

/*----------------------------- Event Listeners -----------------------------*/

animeBtn.addEventListener("click", appearQuestion)


nflBtn.addEventListener("click", () => {
  const nflQuestions = {
    source: "NFL Questions",
    questions: getNflQuestions(),
  }
 question.push(nflQuestions)
 console.log(question);
  // console.log(getNflQuestions());
  textBox.innerText = "NFL" 
})

comicsBtn.addEventListener("click", () => {
  const comicsQuestions = {
    source: "Comics Questions",
    questions: getComicsQuestions(),
  }
  question.push(comicsQuestions)  
  console.log(question);
  // console.log(getComicsQuestions());
  textBox.innerText = "Comics" 
})

cartoonsBtn.addEventListener("click", () => {
  const cartoonsQuestions = {
    source: "Cartoons Questions",
    questions: getCartoonsQuestions(),
  }
  question.push(cartoonsQuestions)  
  console.log(question);
  // console.log(getCartoonsQuestions());
  textBox.innerText = "Cartoons"
})


/*-------------------------------- Functions --------------------------------*/
 
  function appearQuestion(evt) {
    const animeQuestions = {
      source: evt.target.id === "anime-button",
      questions: evt.target.id === "anime-button" ? getAnimeQuestions(): console.log("anime")
  } 
  question.push(animeQuestions)
  // console.log(question) 
  render()
  }

  function render() {
    questionContainer.innerHTML = ""
    question.forEach((Que) => {
      appendQuestion(Que)
    })
  }

  function appendQuote(Que) {
    let 
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


