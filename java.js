let gridSize = 0;
let gridWidth = 0;

gridSize = window.prompt("Please input the amount of squares per side of grid that you want created");
gridWidth = 100/gridSize;
createGrid();
colorChange();

function createSquare() {       //Creates a single square
    const mainBody = document.querySelector("#container");
    const gridMake = document.createElement("div");
    gridMake.classList.add("squaregrid");
    gridMake.style.width = gridWidth + "%";
    gridMake.style.paddingBottom = gridWidth + "%";
    mainBody.appendChild(gridMake);
}

function createGrid() {         //Creates a grid with multiple calls of createSquare() according to input from user
    gridCount = 0;
    while (gridCount < (gridSize*gridSize)) {
        createSquare();
        gridCount++
    }
}

function colorChange() {        //Initiates color change through class addition on hover
    const selectSquare = document.querySelectorAll(".squaregrid");
    selectSquare.forEach(square => square.addEventListener("mouseover", event => {
        square.classList.add("hoverChange");
        let squareOpacity = Number(square.style.opacity);
        if (square.style.opacity < 0.1) {
            square.style.opacity = 0.1;
        } else if (square.style.opacity >= 0.1) {
            square.style.opacity = squareOpacity + 0.1;
        }
}))
}

function clearGrid() {
    const squareReset = document.querySelectorAll(".hoverChange");
    squareReset.forEach(square => square.classList.remove("hoverChange"));
}