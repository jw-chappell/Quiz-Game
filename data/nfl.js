const nflQuestions = [
  {
    question : "How many SuperBowl rings does Tom Brady have? ",
    correctAnswer : 2,
    choices : ["8",
               "6",
               "7",
               "4"]
  } ,

  {
    question : "This NFL franchise name was inspired from Edgar Allan Poe?",
    correctAnswer : 3,
    choices : ["Falcons",
               "Eagles",       
               "Cardinals",        
               "Ravens"]
  } ,

  {
    question : "Which NFL runningback holds the record for rushing yards?",
    correctAnswer : 0,
    choices : ["Emmit Smith",
               "Barry Sanders",
               "Walter Payton",
               "Adrian Peterson"]
  } ,

  {
    question : "Which NFL Coach has the most wins in NFL History?",
    correctAnswer : 3,
    choices : ["Vince Lombardi", 
               "Tom Landry",
               "Bill Belichick", 
               "Don Shula"]
  } ,

  {
    question : "Who owned the record of rushing yards in a single season by a Quaterback before Lamar Jackson broke it in 2019? ",
    correctAnswer : 1,
    choices : ["Cam Newton",
               "Michael Vick",
               "Steve Young",
               "Randall Cunningham"]
  },

  {
    question : "Which NFL team has the nicknamed 'America's Team'? ",
    correctAnswer : 2,
    choices : ["Pittsburg Steelers", 
               "Green Bay Packers", 
               "Dallas Cowboys", 
               "Chicago Bears"]
  } ,

  {
    question : "Whose looked as the GOAT of NFL returners?",
    correctAnswer : 0,
    choices : ["Devin Hester",
               "Deion Sanders", 
               "Dante Hall",
               "Josh Cribbs"]
  } ,

  {
    question : "Which NFL team has the most Super Bowl Apperances?",
    correctAnswer : 3,
    choices : ["San Francisco 49ers",
               "Dallas Cowboys",
               "Pittsburg Steelers",
               "The England Patriots "]
  } ,

  {
    question : "Which player was this quote made for '2/3 of the world is covered by water. The other third is covered by ______'? ",
    correctAnswer : 2,
    choices : ["Deion Sanders", 
               "Rod Woodson", 
               "Ed Reed",
               "Troy Polamalu"]
  } ,

  {
    question : "Who is the youngest Head Coach to win a Super Bowl?",
    correctAnswer : 1,
    choices : ["John Madden",
               "Mike Tomlin", 
               "Joe Gruden", 
               "Joe Gibbs"]
  } ,

]


function getNflQuestions() {
  return nflQuestions[Math.floor(Math.random() * (nflQuestions.length - 1))]
}
// function getNflQuestions() {
//   let question = nflQuestions[Math.floor(Math.random() *(nflQuestions.length - 1))]   
//  return question.question
// }

export {
  getNflQuestions
}