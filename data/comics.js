const comicsQuestions = [
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
  } ,

  
  
] 

function getRandomComicsQuestions() {
  return comicsQuestions[Math.floor(Math.random() * (comicsQuestions.length - 1))]
}

export {
  comicsQuestions
}