let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

function time() {
       let date = new Date();
       let nhour = date.getHours();
       let nminute = date.getMinutes();
       let nsecond = date.getSeconds();
       let calcHour = nhour * 30 + nminute / 2;
       let calcMinute = nminute * 6 + nsecond / 10;
       let calcSecond = nsecond * 6;

       hour.style.transform = `rotate(${calcHour}deg)`;
       minute.style.transform = `rotate(${calcMinute}deg)`;
       second.style.transform = `rotate(${calcSecond}deg)`;
}
time();
let clock = setInterval(time, 1000);
