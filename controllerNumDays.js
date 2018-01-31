// number of days in a month
const monthDays = [
  {month: 'January', numberOfDays: 31},
  {month: 'February', numberOfDays: 28},
  {month: 'March', numberOfDays: 31},
  {month: 'April', numberOfDays: 30},
  {month: 'May', numberOfDays: 31},
  {month: 'June', numberOfDays: 30},
  {month: 'July', numberOfDays: 31},
  {month: 'August', numberOfDays: 31},
  {month: 'September', numberOfDays: 30},
  {month: 'October', numberOfDays: 31},
  {month: 'November', numberOfDays: 30},
  {month: 'December', numberOfDays: 31},
]

const getRandom = (myList) => myList[Math.floor(Math.random() * myList.length)]
const printAtId = (id, s) => document.getElementById(id).innerHTML = s

const randomMonth = getRandom(monthDays)
printAtId('month', randomMonth.month)


// weekday of a given date
const now = new Date().getTime()
const twentyFourHours = 86400000
const limitOnDaysForward = 90
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let randomFutureDate = new Date(now + (twentyFourHours * Math.random() * limitOnDaysForward))
printAtId('futureDate', randomFutureDate.toUTCString().substring(5,11))


//revealing and reloading on keypress
let numDaysVisible = false
let weekDayVisible = false
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 ){
    if (numDaysVisible === false) {
      printAtId('numDays', randomMonth.numberOfDays)
      numDaysVisible = true
    } else location.reload()
  }
  if (event.keyCode === 68 ){
    if (weekDayVisible === false) {
      printAtId('dayOfWeek', daysOfTheWeek[randomFutureDate.getDay()])
      weekDayVisible = true
    } else location.reload()
  }
})