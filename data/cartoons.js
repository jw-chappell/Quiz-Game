const cartoonsQuestions = [
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

function getRandomCartoonsQuestions() {
  return cartoonsQuestions[Math.floor(Math.random() * (cartoonsQuestions.length - 1))]
}
export {
  cartoonsQuestions
}