const clockSeconds = document.querySelector('.clock-seconds');
const clockMinutes = document.querySelector('.clock-minutes');
const clockHours = document.querySelector('.clock-hours');

function setSeconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    clockSeconds.style.transform = `rotate(${secondDegrees}deg)`;
}

function setMinutes() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    clockMinutes.style.transform = `rotate(${minuteDegrees}deg)`;
}

function setHours() {
    const now = new Date();
    const hours = now.getHours();
    const hourDegrees = ((hours / 60) * 360) + 90;
    clockHours.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setSeconds, 1000);
setInterval(setMinutes, 1000);
setInterval(setHours, 1000);