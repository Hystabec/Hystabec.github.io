const items = document.querySelectorAll(".cycleItem");
const rButton = document.getElementById("rightCycleButton");
const lButton = document.getElementById("leftCycleButton")
let currentIndex = 0;

//move to the right side the set active - so that it appears to come from the right
rButton.addEventListener("click", () => {
    items[currentIndex].classList.remove("active");
    
    currentIndex = (currentIndex + 1) % items.length;

    items[currentIndex].classList.add("active");
    items[currentIndex].classList.remove("hidden");

    setTimeout(() => {
        items[(currentIndex - 1 + items.length) % items.length].classList.add("hidden");
    }, 500); 
});

//move to the left side the set active - so that it appears to come from the left
lButton.addEventListener("click", () => {
    items[currentIndex].classList.remove("active");
    
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    let nextItem = items[currentIndex].classList;

    nextItem.remove("hidden");
    nextItem.add("active");

    setTimeout(() => {
        items[(currentIndex + 1) % items.length].classList.add("hidden");
    }, 500); 
});