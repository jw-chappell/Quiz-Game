const cartoonsQuestions = [
  
]

function getRandomCartoonsQuestions() {
  return cartoonsQuestions[Math.floor(Math.random() * (cartoonsQuestions.length - 1))]
}
export {
  cartoonsQuestions
}