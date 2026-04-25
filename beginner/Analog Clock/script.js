setInterval(() =>{
    let date = new Date();
    hTime = date.getHours();
    mTime = date.getMinutes();
    sTime = date.getSeconds();

    let hRotation = 30*hTime + mTime/2;
    let mRotation = 6*mTime;
    let sRotation = 6*sTime;
}, 1000);