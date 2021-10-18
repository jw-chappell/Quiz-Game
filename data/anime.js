const animeQuestions = [
  {
    question : "How many Hasiahra are in Demon Slayer? ",
    correctAnswer : "Nine",
    choices : ["Twelve, Seven , Nine , Eleven"]
  } , 

  {
    question : "Which anime make up the orginal Big 3?",
    correctAnswer : "OnePiece, Nauto, Bleach",
    choices : ["DragonBall Z, Naruto, One Piece","OnePiece, Nauto, Bleach","Yu Yu Hakksho, DragonBall Z , Roushin Kenshin", "Demon Slayer, My Hero Academia , Black Clover" ]
  } ,

  {
    question : "What is Ichigos Bankai called?" ,
    correctAnswer : "Tensa Zangetsu",
    choices : ["Hakka No Togame","Tensa Zangetsu","Sōō Zabimaru","Daiguren Hyōrinmaru"]
  } , 

  {
    question : "Deku wanted to be a hero because of what hero?",
    correctAnswer : "All Might",
    choices : ["All Might", "Endeavor",
    "Eraserhead" , "Gran Torino"]
  } ,
  
  {
    question : "What workout routine resulted in Saitama's incredible power?",
    correctAnswer : "100 push-ups, 100 sit-ups, 100, squats, 10 km run",
    choices : ["100 squats , 100 burpees, 100 moutain climbers, ","100 sit-ups , 100 toe-taps, 100 supermans, 10 km jog","100 pull-ups , 100 push-ups, 100 lunges, 2 hours jumping rope", "100 pull-ups , 100 push-ups, 100 lunges, 10 km jog" ]
  } , 

  {
    question : "What was the phrase Vash the Stampede based his actions from?",
    correctAnswer : "Love and peace",
    choices : ["Whatever happens,happens", "Love and peace","If you don’t take risks, you can’t create a future!", "Sometimes it’s necessary to do unnecessary things."]
  } 
]

function getRandomAnimeQuestions() {
  return animeQuestions[Math.floor(Math.random() * (animeQuestions.length - 1))]
}
export {
  animeQuestions 
}