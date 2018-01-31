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

let numDaysHidden = true

const reset = () => {
  const randomMonth = getRandom(monthDays)
  printAtId('month', randomMonth.month)
  printAtId('numDays', randomMonth.numberOfDays)
}

const toggleNumDaysVisibility = () => {
  let element = document.getElementById('numDays')
  if (numDaysHidden) {
    element.style.display = 'block'
    numDaysHidden = false
  } else {
    element.style.display = 'none'
    numDaysHidden = true
    reset()
  }
}

reset()

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) toggleNumDaysVisibility()
  location.reload()
})

