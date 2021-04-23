const hour=document.getElementById("hours");
const minute=document.getElementById("minute");
const second=document.getElementById("second");
const day=document.getElementById("days")
let newYear="1 Jan 2022";

function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate= new Date();
    let totalSecond= (newYearDate-currentDate)/1000 // I convert ms to s
    const days=Math.floor(totalSecond/3600/24)
    const hours=Math.floor(totalSecond/3600)%24;
    const mins=Math.floor(totalSecond/60)%60;
    const seconds=Math.floor(totalSecond)%60;

    day.innerHTML=days;
    hour.innerHTML=hours;
    minute.innerHTML=mins;
    second.innerHTML=seconds;
}

countdown()
setInterval(countdown,1000)