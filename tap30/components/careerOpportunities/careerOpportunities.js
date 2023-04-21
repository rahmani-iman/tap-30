const descriptions = document.querySelectorAll(".description");
const buttons = document.querySelectorAll(".description-btn button");
buttons.forEach((element) => {
    element.addEventListener("click", (e) => {
        buttons.forEach((button) => button.classList.remove("border-btn"))
        e.target.classList.add("border-btn");
        const targetTabContent = element.dataset.tabTarget;
        descriptions.forEach((description) => {
            description.classList.remove("active");
            description.classList.add("hidden");
            if (targetTabContent === description.id) {
                description.classList.replace("hidden", "active");
            }  
        });
    })
});

const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const reviewContent = document.querySelectorAll(".review-content");
let sum = 0;
rightBtn.addEventListener("click", moveBtn);
leftBtn.addEventListener("click", moveBtn);
function moveBtn() {
    sum = sum + 1;
    reviewContent.forEach((element) => {
        element.classList.remove("active");
        element.classList.add("hidden");
        if (sum > 2) {
            sum = 0;
        }
        if (sum == element.attributes.value.textContent) {
            element.classList.replace("hidden", "active");
        }
    })
}

const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});