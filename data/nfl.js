const nflQuestions = [
  {
    question : "",
    correctAnswer : "",
    choices : [""]
  } ,

  {
    question : "",
    correctAnswer : "",
    choices : [""]
  } ,

  {
    question : "",
    correctAnswer : "",
    choices : [""]
  } ,

  {
    question : "",
    correctAnswer : "",
    choices : [""]
  } ,

  {
    question : "",
    correctAnswer : "",
    choices : [""]
  } 
]

function getRandomNflQuestions() {
  return nflQuestions[Math.floor(Math.random() * (nflQuestions.length - 1))]
}

export {
  nflQuestions
}