
const now = new Date().getTime()
const twentyFourHours = 86400000
const limitOnDaysForward = 90

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let randomFutureDate = new Date(now + (twentyFourHours * Math.random() * limitOnDaysForward))

document.getElementById('futureDate').innerHTML = randomFutureDate.toUTCString().substring(5,11)

document.getElementById('dayOfWeek').innerHTML = daysOfTheWeek[randomFutureDate.getDay()]