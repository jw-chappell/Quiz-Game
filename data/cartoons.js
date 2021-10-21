const cartoonsQuestions = [
  {
    question : "What is Spongebob's pet snail name?",
    correctAnswer : 0,
    choices : ["Gary",
               "Luke",
               "Greg",
               "Terry"]
  } ,

  {
    question : "What age are you decommissioned in Kids Next Door",
    correctAnswer : 3,
    choices : ["Twleve",
               "Eleven",
               "Ten",
               "Thirteen"]
  } ,

  {
    question : "Ron Stoppable pet Rufus was what kind of animal?",
    correctAnswer : 0,
    choices : ["Naked mole rat",
               "Guinea pig",
               "Hamster",
               "Gerbil" ]
  } ,

  {
    question : "How did Danny Phatom get his powers?",
    correctAnswer : 2,
    choices : ["From dranking a potion",
              "Making a wish",
              "Unpredictable portal", 
              "Inherited them from his parents"
                    ]
  } ,


  {
    question : "Ed,Edd n Eddy always wanted to get what candy?",
    correctAnswer : 1,
    choices : ["Jolly Ranchers",
               "Jawbreakers",
               "Warheads",
               "Lollipops"]
  },

  {
    question : "What was Stiich's experiment number?",
    correctAnswer : 3,
    choices : ["262",
               "787",
               "090",
               "626"]
  } ,

  {
    question : "Which element did Aang struggle with the most? ",
    correctAnswer : 1,
    choices : ["Water",
               "Earth",
               "Fire", 
               "Air"]
  } ,

  {
    question : "Where does Courage the Cowardly Dog live ",
    correctAnswer : 2,
    choices : ["In the Middle Forest", 
               "Underground", 
               "In the Middle of Nowhere",
               "The Country-Side"]
  } ,

  {
    question : "How many days of summer vacation are there?",
    correctAnswer : 0,
    choices : ["104",
               "100",
               "94",
               "120"]
  } ,


  {
    question : "What kind of animal is Rocko, from Rocko's Modern Life?",
    correctAnswer : 3,
    choices : ["Koala",
               "Kangraoo",
               "Wombat",
               "Wallaby"]
  } 
]


function getCartoonsQuestions() {
  return cartoonsQuestions[Math.floor(Math.random() * (cartoonsQuestions.length - 1))]
}
// function getCartoonsQuestions() {
//   let question = cartoonsQuestions[Math.floor(Math.random() *(cartoonsQuestions.length - 1))]   
//  return question.question
// }

export {
  getCartoonsQuestions
}