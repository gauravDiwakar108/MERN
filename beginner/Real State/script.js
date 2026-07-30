const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0");

    overlay.classList.remove("hidden");
}

function closeSidebar() {
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("-translate-x-full");

    overlay.classList.add("hidden");
}

menuBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);