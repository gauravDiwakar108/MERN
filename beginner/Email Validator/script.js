console.log("this is my script");

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "gauravsubhash",
    "email": "gauravsubhash9999@gmail.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}



submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let key = "ema_live_ggKgJn8kYysdSyCHGHav0zgRO04hvrqC3d83RKeH";
    let email = document.getElementById("username").value;
    console.log("clicked!");
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json();

    let str = ``;
    for (key of Object.keys(result)) {
        str += `<div>${key}: ${result[key]}</div>`;
    }

    console.log(str);

    resultCont.innerHTML = str;
})