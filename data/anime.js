const animeQuestions = [
  {
    question : "How many Hasiahra are in Demon Slayer? ",
    correctAnswer : "Nine",
    choices : ["Twelve, Seven , Nine , Eleven"]
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
    correctAnswer : "Love and peace!",
    choices : ["Whatever Happens, Happens", ""]
  } 
]

function getRandomAnimeQuestions() {
  return animeQuestions[Math.floor(Math.random() * (animeQuestions.length - 1))]
}
export {
  animeQuestions 
}