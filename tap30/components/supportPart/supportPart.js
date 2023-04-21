const supportHead = document.querySelectorAll(".support-head div a");
const descriptions = document.querySelectorAll(".description");
supportHead.forEach(element => {
    element.addEventListener("click", (e) => {
        supportHead.forEach((support) => support.classList.remove("border"));
        e.target.classList.add("border");
        const targetTabContent = e.target.dataset.tabTarget;
        descriptions.forEach((description) => {
            description.classList.remove("active");
            description.classList.add("hidden");
            if (targetTabContent === description.id) {
                description.classList.replace("hidden", "active");
            } 
        })
    })
});

const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});
