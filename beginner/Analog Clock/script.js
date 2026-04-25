setInterval(() =>{
    let date = new Date();
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();

    let hRotation = 30*hTime + mTime/2;
    let mRotation = 6*mTime;
    let sRotation = 6*sTime;

    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);