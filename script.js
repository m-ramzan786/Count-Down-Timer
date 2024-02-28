const eventNameInput = document.querySelector(".event-name-container input");
const saveButton = document.querySelector(".event-name-container button");
const eventName = document.querySelector(".event-heading p span");

const timeInput = document.querySelector(".date-time-container #time");
const dateInput = document.querySelector(".date-time-container #date");

eventNameInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        saveButton.click()
    }
})

saveButton.addEventListener("click", () => {
    const eventNameValue = eventNameInput.value;
    eventName.innerText = eventNameValue;
})

timeInput.addEventListener("change", () => {
    const timeValue = timeInput.value;
    console.log(timeValue);
})
dateInput.addEventListener("change", () => {
    const dateValue = dateInput.value;
    console.log(dateValue);
})

const startButton = document.querySelector(".start-button");
const days = document.querySelector(".days h2");
const hours = document.querySelector(".hours h2");
const minutes = document.querySelector(".minutes h2");
const seconds = document.querySelector(".seconds h2");

// let sec = 0, min = 0, hour = 0, day = 0;

// let intervalId;

// const startTimer = () => {
//     intervalId = setInterval(() => {
//     if (sec < 59) {
//         sec++;
//     } else {
//         sec = 0;
//         if (min < 59) {
//             min++;
//         } else {
//             min = 0;
//             if (hour < 23) {
//                 hour++;
//             } else {
//                 hour = 0;
//                 day++;
//             }
//         }
//     }
//     seconds.innerText = String(sec).padStart(2, "0");
//     minutes.innerText = String(min).padStart(2, "0");
//     hours.innerText = String(hour).padStart(2, "0");
//     days.innerText = String(day).padStart(2, "0");
//     }, 1000)
// }

// const stopTimer = () => {
//     clearInterval(intervalId);
// };
// startTimer();
// stopTimer();


// theme
// seconds.addEventListener("click", () => {
//     const container =  document.querySelector(".container");
//     container.classList.toggle("dark");
// })


// const timerFunction = () => {
//     const timer = new Date().getTime(timeInput.value);
//     console.log(timer);
// }

// timerFunction();

const sec = 1000,
      min = sec * 60,
      hour = min * 60,
      day =  hour * 24;

startButton.addEventListener("click", () => {
    const intervalId = setInterval(() => {

        let timer = new Date(`${dateInput.value} ${timeInput.value}`).getTime();
        const today = new Date().getTime();

        const difference = timer - today;

        const leftDays = Math.floor(difference / day);
        const leftHours = Math.floor((difference % day) / hour);
        const leftMinutes = Math.floor((difference % hour) / min);
        const leftSeconds = Math.floor((difference % min) / sec);

        days.innerHTML = leftDays;
        hours.innerHTML = leftHours;
        minutes.innerHTML = leftMinutes;
        seconds.innerText = leftSeconds;

        if(difference < 0) {
            clearInterval(intervalId);
            alert("Time's up");
        }
    },0)
})

    // let time = dateInput.value;

    // let ms = Number(time.split(':')[0]) * 60 * 60 * 1000 + Number(time.split(':')[1]) * 60 * 1000;

    // var timeInString = "99:99:99:99"; // Any value here
//     var timeInString = time; // Any value here
//     var milliseconds;
//     if (timeInString.split(":").length === 2) {
//       /* For DD:HH:MM:SS */
//   milliseconds =
//       Number(timeInString.split(":")[0]) * 86400000 +
//       Number(timeInString.split(":")[1]) * 3600000 +
//       Number(timeInString.split(":")[2]) * 60000 +
//       Number(timeInString.split(":")[3]) * 1000;
//     }


