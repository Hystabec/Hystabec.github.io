/*function resizeSideBar(defaultHeight, contentHeight)
{
    let sideBar = document.getElementById("sideBarBox");
    let mainContent = document.getElementById("mainContentBox");

    if(contentHeight > defaultHeight)
    {
        //sideBar.style.height = contentHeight + "px";
        resizeTopBarExtra(widthTaken);
        return contentHeight;
    }
    else
    {
        //sideBar.style.height = defaultHeight + "px";
        resizeTopBarExtra(widthTaken);
        return defaultHeight;
    }
}*/

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

let currentlyActive = 0;

//removing left border from the first element
selecItem0.style.borderLeft = "none";

function removeLastClasses(index)
{
    switch(index)
    {
    case 0:
        selecItem0.classList.remove("selected");
        selecContent0.classList.remove("active");
        break;
    case 1:
        selecItem1.classList.remove("selected");
        selecContent1.classList.remove("active");
        break;
    case 2:
        selecItem2.classList.remove("selected");
        selecContent2.classList.remove("active");
        break;
    case 3:
        selecItem3.classList.remove("selected");
        selecContent3.classList.remove("active");
        break;
    case 4:
        selecItem4.classList.remove("selected");
        selecContent4.classList.remove("active");
        break;
    }
}

asButtons[0].addEventListener("click", ()=>{
    if(currentlyActive == 0)
        return;

    removeLastClasses(currentlyActive);

    selecItem0.classList.add("selected");
    selecContent0.classList.add("active");

    currentlyActive=0;

    //resizeSideBar(originalPageSize, selecContent0.getBoundingClientRect().height + selectionBarHeight);

    switchViewCase("DD");
});

asButtons[1].addEventListener("click", ()=>{
    if(currentlyActive == 1)
        return;

    removeLastClasses(currentlyActive);

    selecItem1.classList.add("selected");
    selecContent1.classList.add("active");

    currentlyActive=1;

    //resizeSideBar(originalPageSize, selecContent1.getBoundingClientRect().height + selectionBarHeight);

    switchViewCase("A");
});

asButtons[2].addEventListener("click", ()=>{
    if(currentlyActive == 2)
        return;

    removeLastClasses(currentlyActive);

    selecItem2.classList.add("selected");
    selecContent2.classList.add("active");

    currentlyActive=2;

    //resizeSideBar(originalPageSize, selecContent2.getBoundingClientRect().height + selectionBarHeight);

    switchViewCase("LH");
});

asButtons[3].addEventListener("click", ()=>{
    if(currentlyActive == 3)
        return;

    removeLastClasses(currentlyActive);

    selecItem3.classList.add("selected");
    selecContent3.classList.add("active");

    currentlyActive=3;

    //resizeSideBar(originalPageSize, selecContent3.getBoundingClientRect().height + selectionBarHeight);

    switchViewCase("DE");
});

asButtons[4].addEventListener("click", ()=>{
    if(currentlyActive == 4)
        return;

    removeLastClasses(currentlyActive);

    selecItem4.classList.add("selected");
    selecContent4.classList.add("active");

    currentlyActive=4;

    //resizeSideBar(originalPageSize, selecContent4.getBoundingClientRect().height + selectionBarHeight);

    switchViewCase("GE");
});

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

assignVariables("DD");
//-------------Gallery fun End-------------