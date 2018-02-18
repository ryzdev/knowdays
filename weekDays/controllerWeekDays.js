const printAtId = (id, s) => document.getElementById(id).innerHTML = s

const now = new Date().getTime()
const twentyFourHours = 86400000
const limitOnDaysForward = 90
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const field1 = 'futureDate'
const field2 = 'dayOfWeek'

let randomFutureDate
let answerVisible

const reset = () => {
  answerVisible = false
  randomFutureDate = new Date(now + (twentyFourHours * Math.random() * limitOnDaysForward))
  printAtId(field1, randomFutureDate.toUTCString().substring(5, 11))
  printAtId(field2, '')
}

const toggleAnswerOrReset = () => {
  if (!answerVisible) {
    printAtId(field2, daysOfTheWeek[randomFutureDate.getDay()])
    answerVisible = true
  } else {
    reset()
  }
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    toggleAnswerOrReset()
  }
})

reset()
