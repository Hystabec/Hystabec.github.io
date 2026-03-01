function resizeTopBarExtra(newSize)
{
    let selecItemFiller = document.getElementById("selectionItem_Filler");
    selecItemFiller.style.width = (document.getElementById("selectionBarContainer").getBoundingClientRect().width - newSize) + "px";
} 

const selecItem0 = document.getElementById("selectionItem_0");
const selecItem1 = document.getElementById("selectionItem_1");
const selecItem2 = document.getElementById("selectionItem_2");
const selecItem3 = document.getElementById("selectionItem_3");
const selecItem4 = document.getElementById("selectionItem_4");

//this make the boarder along the selection bar extend all the way across the screen
let widthTaken = 0;
widthTaken += selecItem0.getBoundingClientRect().width;
widthTaken += selecItem1.getBoundingClientRect().width;
widthTaken += selecItem2.getBoundingClientRect().width;
widthTaken += selecItem3.getBoundingClientRect().width;
widthTaken += selecItem4.getBoundingClientRect().width;
resizeTopBarExtra(widthTaken);

const selecContent0 = document.getElementById("selectionItemContent_0");
const selecContent1 = document.getElementById("selectionItemContent_1");
const selecContent2 = document.getElementById("selectionItemContent_2");
const selecContent3 = document.getElementById("selectionItemContent_3");
const selecContent4 = document.getElementById("selectionItemContent_4");
const asButtons = document.querySelectorAll(".selectionItem button");

const maxSelIndex = 4;
function selIndexToShort(index) {
    switch(Number(index))
    {
    case 0:
        return "DD";
    case 1:
        return "A";
    case 2:
        return "LH";
    case 3:
        return "DE";
    case 4:
        return "GE";
    }
    return "";
}

let currentlyActive = 0;

//removing left border from the first element
selecItem0.style.borderLeft = "none";

//-------------Mobile/Small scale------------------
const hamMen = document.querySelector(".hamburgerMenuToggleSub");
const offScreenMen = document.querySelector(".hamburgerMenu");

hamMen.addEventListener("click", () => {
    hamMen.classList.toggle("active");
    offScreenMen.classList.toggle("active");
})

function removeHamActive(){
    hamMen.classList.remove("active");
    offScreenMen.classList.remove("active");
}

const BM_selecItem0 = document.getElementById("BM_DD");
const BM_selecItem1 = document.getElementById("BM_A");
const BM_selecItem2 = document.getElementById("BM_LH");
const BM_selecItem3 = document.getElementById("BM_DE");
const BM_selecItem4 = document.getElementById("BM_FGE");

const BM_asButtons = document.querySelectorAll(".BM_BUTTON");
//-------------Mobile/Small scale END---------------

function removeLastClasses(index)
{
    switch(index)
    {
    case 0:
        selecItem0.classList.remove("selected");
        BM_selecItem0.classList.remove("active");
        selecContent0.classList.remove("active");
        break;
    case 1:
        selecItem1.classList.remove("selected");
        BM_selecItem1.classList.remove("active");
        selecContent1.classList.remove("active");
        break;
    case 2:
        selecItem2.classList.remove("selected");
        BM_selecItem2.classList.remove("active");
        selecContent2.classList.remove("active");
        break;
    case 3:
        selecItem3.classList.remove("selected");
        BM_selecItem3.classList.remove("active");
        selecContent3.classList.remove("active");
        break;
    case 4:
        selecItem4.classList.remove("selected");
        BM_selecItem4.classList.remove("active");
        selecContent4.classList.remove("active");
        break;
    }
}

let button0fun = ()=>{
    if(currentlyActive == 0)
        return;

    removeLastClasses(currentlyActive);

    selecItem0.classList.add("selected");
    BM_selecItem0.classList.add("active");
    selecContent0.classList.add("active");

    currentlyActive=0;
    setCAVal(0);

    switchViewCase("DD");
};
let button1fun = ()=>{
    if(currentlyActive == 1)
        return;

    removeLastClasses(currentlyActive);

    selecItem1.classList.add("selected");
    BM_selecItem1.classList.add("active");
    selecContent1.classList.add("active");

    currentlyActive=1;
    setCAVal(1);

    switchViewCase("A");
};
let button2fun = ()=>{
    if(currentlyActive == 2)
        return;

    removeLastClasses(currentlyActive);

    selecItem2.classList.add("selected");
    BM_selecItem2.classList.add("active");
    selecContent2.classList.add("active");

    currentlyActive=2;
    setCAVal(2);

    switchViewCase("LH");
};
let button3fun = ()=>{
    if(currentlyActive == 3)
        return;

    removeLastClasses(currentlyActive);

    selecItem3.classList.add("selected");
    BM_selecItem3.classList.add("active");
    selecContent3.classList.add("active");

    currentlyActive=3;
    setCAVal(3);

    switchViewCase("DE");
};
let button4fun = ()=>{
    if(currentlyActive == 4)
        return;

    removeLastClasses(currentlyActive);

    selecItem4.classList.add("selected");
    BM_selecItem4.classList.add("active");
    selecContent4.classList.add("active");

    currentlyActive=4;
    setCAVal(4);

    switchViewCase("GE");
};

asButtons[0].addEventListener("click", button0fun);
asButtons[1].addEventListener("click", button1fun);
asButtons[2].addEventListener("click", button2fun);
asButtons[3].addEventListener("click", button3fun);
asButtons[4].addEventListener("click", button4fun);

//-------------Mobile/Small scale---------------
BM_asButtons[0].addEventListener("click", button0fun);
BM_asButtons[1].addEventListener("click", button1fun);
BM_asButtons[2].addEventListener("click", button2fun);
BM_asButtons[3].addEventListener("click", button3fun);
BM_asButtons[4].addEventListener("click", button4fun);
//-------------Mobile/Small scale END---------------

const originalPageSize = document.getElementById("sideBarBox").getBoundingClientRect().height;
const selectionBarHeight = selecItem0.getBoundingClientRect().height;
//resizeSideBar(originalPageSize, selecContent0.getBoundingClientRect().height + selectionBarHeight);

//-------------Gallery fun----------------
let gal_Index = 0;
let slideInterval = setInterval(nextSlide, 10000, "DD");

let gal_slides;
let gal_indicatorsCountainer;
let gal_indicators;
let gal_pageSet = new Set();

function assignVariables(sh){
    gal_slides = document.querySelectorAll(".slide."+sh);
    gal_indicatorsCountainer = document.querySelector(".indicators."+sh);

    if(!gal_pageSet.has(sh))
    {
        gal_slides.forEach((_, i) => {
            const indicator = document.createElement("div");
            indicator.classList.add("indicator");
            indicator.classList.add(sh);
            if(i==0) indicator.classList.add("active");
            gal_indicatorsCountainer.appendChild(indicator);
        })

        gal_pageSet.add(sh);
    }

    gal_indicators = document.querySelectorAll(".indicator."+sh);
}

function showSlide(i, sh) {
    gal_Index = (i + gal_slides.length) % gal_slides.length;
    document.querySelector(".slides." + sh).style.transform = `translateX(-${gal_Index * 100}%)`;
    gal_indicators.forEach((indicator, idx) => {
        indicator.classList.toggle("active", idx === gal_Index);
    })
}

function switchViewCase(sh)
{
    assignVariables(sh);
    resetInterval(sh);
    startSlide(sh);
}

function resetInterval(sh) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000, sh);
}

function startSlide(sh) {
    showSlide(0, sh);
    resetInterval(sh);
}

function prevSlide(sh) {
    showSlide(gal_Index - 1, sh);
    resetInterval(sh);
}

function nextSlide(sh) {
    showSlide(gal_Index + 1, sh);
    resetInterval(sh);
}
//assignVariables("DD");

//-------------Selection saving-----------
function setCAVal(newVal)
{
    const newURL = new URL(window.location);
    newURL.searchParams.set("ca", newVal);
    history.pushState(null, "", newURL);
}

const urlParams = new URLSearchParams(window.location.search);
const caParam = urlParams.get("ca");
if (caParam != null)
{
    currentlyActive = Number(caParam);
    if(currentlyActive > maxSelIndex)
        currentlyActive = 0;
}

switch(currentlyActive)
{
case 0:
    selecItem0.classList.add("selected");
    BM_selecItem0.classList.add("active");
    selecContent0.classList.add("active");
    break;
case 1:
    selecItem1.classList.add("selected");
    BM_selecItem1.classList.add("active");
    selecContent1.classList.add("active");
    break;
case 2:
    selecItem2.classList.add("selected");
    BM_selecItem2.classList.add("active");
    selecContent2.classList.add("active");
    break;
case 3:
    selecItem3.classList.add("selected");
    BM_selecItem3.classList.add("active");
    selecContent3.classList.add("active");
    break;
case 4:
    selecItem4.classList.add("selected");
    BM_selecItem4.classList.add("active");
    selecContent4.classList.add("active");
    break;
}

switchViewCase(selIndexToShort(currentlyActive));