const animeQuestions = [
  
]

function getRandomAnimeQuestions() {
  return animeQuestions[Math.floor(Math.random() * (animeQuestions.length - 1))]
}
export {
  animeQuestions 
}