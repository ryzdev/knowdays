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

let numDaysVisible = false

const showAnswerOrReset = () => {
  if (numDaysVisible === false) {
    printAtId('numDays', randomMonth.numberOfDays)
    numDaysVisible = true
  } else location.reload()
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 ){
    showAnswerOrReset()
  }
})