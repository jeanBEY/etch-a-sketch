//const newDiv = document.createElement("div");
//newDiv.classList.add("square");
//console.log(newDiv);
//document.getElementById("flex-container").appendChild(newDiv);

//RESOURCE:  https://www.reddit.com/r/learnjavascript/comments/jf19y6/creating_a_grid_using_divs/
function createRowDiv(x, y){
    for(let i = 0; i < x; i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        //rowDiv.style.width = 600 / x + "px";
        document.getElementById("grid-container").appendChild(rowDiv);
        createRow(i, y, rowDiv);
    }
}

function createRow(i, y, rowDiv){
    for(let j = 0; j < y; j++){
        let cellDiv = document.createElement("div");
        //cellDiv.style.height = 600 / y + "px";        
        cellDiv.classList.add("cell");
        rowDiv.appendChild(cellDiv);
    }
}

createRowDiv(4,4);

//RESOURCE: https://css-tricks.com/dont-overthink-flexbox-grids/
const rowList = document.querySelectorAll(".rowDiv");
for(let i = 0; i < rowList.length; i++){
    rowList[i].style.display = "flex";
}

//RESOURCE: https://stackoverflow.com/questions/29307971/css-grid-of-squares-with-flexbox
const cellList = document.querySelectorAll(".cell");
for(let i = 0; i < cellList.length; i++){
    cellList[i].style.flexGrow = 1;
    cellList[i].style.flexShrink = 0;
    cellList[i].style.flexBasis = 0;
    cellList[i].style.aspectRatio = 1/1;
    //cellList[i].style.height = auto;
}

const boxes = document.querySelectorAll(".cell");
for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('mouseenter', colorenter);
    boxes[i].addEventListener('mouseleave', colorleave);
}

function colorenter(e){
    e.target.style.backgroundColor = "white";
}

function colorleave(e){
    e.target.style.backgroundColor = "lightsteelblue";
}