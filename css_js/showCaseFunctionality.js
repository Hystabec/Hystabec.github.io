const selecItem0 = document.getElementById("selectionItem_0");
const selecItem1 = document.getElementById("selectionItem_1");
const selecItem2 = document.getElementById("selectionItem_2");
let currentlyActive = 0;

const asButtons = document.querySelectorAll(".selectionItem button");

selecItem0.style.borderLeft ="none";

asButtons[0].addEventListener("click", ()=>{
    if(currentlyActive == 0)
        return;

    switch(currentlyActive)
    {
    case 1:
        selecItem1.classList.remove("selected");
        break;
    case 2:
        selecItem2.classList.remove("selected");
        break;
    }

    selecItem0.classList.add("selected");

    currentlyActive=0;
});

asButtons[1].addEventListener("click", ()=>{
    if(currentlyActive == 1)
        return;

    switch(currentlyActive)
    {
    case 0:
        selecItem0.classList.remove("selected");
        break;
    case 2:
        selecItem2.classList.remove("selected");
        break;
    }

    selecItem1.classList.add("selected");

    currentlyActive=1;
});

asButtons[2].addEventListener("click", ()=>{
    if(currentlyActive == 2)
        return;

    switch(currentlyActive)
    {
    case 0:
        selecItem0.classList.remove("selected");
        break;
    case 1:
        selecItem1.classList.remove("selected");
        break;
    }

    selecItem2.classList.add("selected");

    currentlyActive=2;
});