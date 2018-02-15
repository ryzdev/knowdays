const printAtId = (id, s) => document.getElementById(id).innerHTML = s

const now = new Date().getTime()
const twentyFourHours = 86400000
const limitOnDaysForward = 90
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let randomFutureDate = new Date(now + (twentyFourHours * Math.random() * limitOnDaysForward))

printAtId('futureDate', randomFutureDate.toUTCString().substring(5, 11))

let weekDayVisible = false

const toggleAnswerOrReset = () => {
  if (weekDayVisible === false) {
    printAtId('dayOfWeek', daysOfTheWeek[randomFutureDate.getDay()])
    weekDayVisible = true
  } else location.reload()
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    toggleAnswerOrReset()
  }
})

