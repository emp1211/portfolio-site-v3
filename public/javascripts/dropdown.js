let isDroppedDown = false;
const dropDownMenu = document.getElementById("dropdown-nav");
const dropDownBtn = document.getElementById("dropdown-menu");
dropDownBtn.addEventListener("click", () => {
    if (!isDroppedDown) {
        dropDownMenu.style.display = 'flex';
        isDroppedDown = true;
    } else {
        dropDownMenu.style.display = 'none';
        isDroppedDown = false;
    }
})