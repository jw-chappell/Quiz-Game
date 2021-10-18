const nflQuestions = [
  
]

function getRandomNflQuestions() {
  return nflQuestions[Math.floor(Math.random() * (nflQuestions.length - 1))]
}

export {
  nflQuestions
}