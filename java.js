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
        const style = getComputedStyle(square);
        let styleDeep = style.backgroundColor;
        rgbaValue = Number(styleDeep.match(/\d.\d/));
        if (rgbaValue < 0.9) {
            square.style.backgroundColor = `rgba(0,0,0, ${rgbaValue + 0.1})`;
        }
        }))
}

function clearGrid() {
    const squareReset = document.querySelectorAll(".squaregrid");
    squareReset.forEach(square => square.style.backgroundColor = "");
    squareReset.forEach(square => square.classList.remove("hover-change"));
}