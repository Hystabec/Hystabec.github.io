const selecItem0 = document.getElementById("selectionItem_0");
const selecItem1 = document.getElementById("selectionItem_1");
const selecItem2 = document.getElementById("selectionItem_2");

const selecContent0 = document.getElementById("selectionItemContent_0");
const selecContent1 = document.getElementById("selectionItemContent_1");
const selecContent2 = document.getElementById("selectionItemContent_2");

const asButtons = document.querySelectorAll(".selectionItem button");

let currentlyActive = 0;

//looks better without left border as its the first element
selecItem0.style.borderLeft = "none";

//This solution seems a little cluncky but the best I could make with limited JS knowledge
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
    }
}

asButtons[0].addEventListener("click", ()=>{
    if(currentlyActive == 0)
        return;

    removeLastClasses(currentlyActive);

    selecItem0.classList.add("selected");
    selecContent0.classList.add("active");

    currentlyActive=0;
});

asButtons[1].addEventListener("click", ()=>{
    if(currentlyActive == 1)
        return;

    removeLastClasses(currentlyActive);

    selecItem1.classList.add("selected");
    selecContent1.classList.add("active");

    currentlyActive=1;
});

asButtons[2].addEventListener("click", ()=>{
    if(currentlyActive == 2)
        return;

    removeLastClasses(currentlyActive);

    selecItem2.classList.add("selected");
    selecContent2.classList.add("active");

    currentlyActive=2;
});

//this make the boarder along the selection bar extend all the way across the screen
let selecItemFiller = document.getElementById("selectionItem_Filler");
let widthTaken = 0;

widthTaken += selecItem0.getBoundingClientRect().width;
widthTaken += selecItem1.getBoundingClientRect().width;
widthTaken += selecItem2.getBoundingClientRect().width;

selecItemFiller.style.width = (document.getElementById("selectionBarContainer").getBoundingClientRect().width - widthTaken) + "px";