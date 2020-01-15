let gridSize = 0;
let gridWidth = 0;

gridSize = window.prompt("Please input the amount of squares per side of grid that you want created");
gridWidth = 100/gridSize;
createGrid();
colorChange();

function createSquare() {      
    const mainBody = document.querySelector("#container");
    const gridMake = document.createElement("div");
    gridMake.classList.add("squaregrid");
    gridMake.style.width = gridWidth + "%";
    gridMake.style.paddingBottom = gridWidth + "%";
    mainBody.appendChild(gridMake);
}

function createGrid() {        
    gridCount = 0;
    while (gridCount < (gridSize*gridSize)) {
        createSquare();
        gridCount++
    }
}

function colorChange() {        
    const selectSquare = document.querySelectorAll(".squaregrid");
    selectSquare.forEach(square => square.addEventListener("mouseover", event => {
        square.classList.add('hover-change');
        let squareBackground = getComputedStyle(square).backgroundColor;
        let regex = /\d\.\d/;
        if (squareBackground.match(regex) != null) {
            let squareOpacity  = Number(squareBackground.match(regex))
            square.style.backgroundColor = squareBackground.replace(regex, squareOpacity + 0.1);
        }
    }))
}

function clearGrid() {
    const squareReset = document.querySelectorAll(".squaregrid");
    squareReset.forEach(square => square.style.backgroundColor = "");
    squareReset.forEach(square => square.classList.remove("hover-change"));
}