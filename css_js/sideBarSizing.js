export function resizeSideBar(defaultHeight, contentHeight)
{
    let sideBar = document.getElementById("sideBarBox");
    let mainContent = document.getElementById("mainContentBox");

    if(contentHeight > defaultHeight)
    {
        sideBar.style.height = contentHeight + "px";
        return contentHeight;
    }
    else
    {
        sideBar.style.height = defaultHeight + "px";
        return defaultHeight;
    }
}