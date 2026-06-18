document.addEventListener("DOMContentLoaded", () => {


    const increase = document.querySelector(".increase");
    const decrease = document.querySelector(".decrease")
    const reset = document.querySelector(".reset")
    const num = document.querySelector(".number");

    // num.textContent = 0;
    let count = 0;
    num.textContent = count;
    increase.addEventListener("click", () => {
        count++;
        num.textContent = count;
    });
    decrease.addEventListener("click", () => {
        count--;
        num.textContent = count;
        if (count<0){
        alert("number is -ive");
    }
    });
    reset.addEventListener("click", () => {
        count = 0;
        num.textContent = count;
    });
});