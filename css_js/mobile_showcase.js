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

function BM_removeLastClasses(index)
{
    switch(index)
    {
    case 0:
        BM_selecItem0.classList.remove("active");
        selecContent0.classList.remove("active");
        break;
    case 1:
        BM_selecItem1.classList.remove("active");
        selecContent1.classList.remove("active");
        break;
    case 2:
        BM_selecItem2.classList.remove("active");
        selecContent2.classList.remove("active");
        break;
    case 3:
        BM_selecItem3.classList.remove("active");
        selecContent3.classList.remove("active");
        break;
    case 4:
        BM_selecItem4.classList.remove("active");
        selecContent4.classList.remove("active");
        break;
    }
}

BM_asButtons[0].addEventListener("click", ()=>{
    if(currentlyActive == 0)
        return;

    BM_removeLastClasses(currentlyActive);

    BM_selecItem0.classList.add("active");
    selecContent0.classList.add("active");

    currentlyActive=0;

    switchViewCase("DD");
    removeHamActive()
});

BM_asButtons[1].addEventListener("click", ()=>{
    if(currentlyActive == 1)
        return;

    BM_removeLastClasses(currentlyActive);

    BM_selecItem1.classList.add("active");
    selecContent1.classList.add("active");

    currentlyActive=1;

    switchViewCase("A");
    removeHamActive()
});

BM_asButtons[2].addEventListener("click", ()=>{
    if(currentlyActive == 2)
        return;

    BM_removeLastClasses(currentlyActive);

    BM_selecItem2.classList.add("active");
    selecContent2.classList.add("active");

    currentlyActive=2;

    switchViewCase("LH");
    removeHamActive()
});

BM_asButtons[3].addEventListener("click", ()=>{
    if(currentlyActive == 3)
        return;

    BM_removeLastClasses(currentlyActive);

    BM_selecItem3.classList.add("active");
    selecContent3.classList.add("active");

    currentlyActive=3;

    switchViewCase("DE");
    removeHamActive()
});

BM_asButtons[4].addEventListener("click", ()=>{
    if(currentlyActive == 4)
        return;

    BM_removeLastClasses(currentlyActive);

    BM_selecItem4.classList.add("active");
    selecContent4.classList.add("active");

    currentlyActive=4;

    switchViewCase("GE");
    removeHamActive()
});