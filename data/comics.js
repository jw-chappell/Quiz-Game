const comicsQuestions = [

  
] 

function getRandomComicsQuestions() {
  return comicsQuestions[Math.floor(Math.random() * (comicsQuestions.length - 1))]
}

export {
  comicsQuestions
}