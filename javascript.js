const sizeButtons = document.querySelectorAll('.size');

//CREATES GRID ITSELF
//RESOURCE:  https://www.reddit.com/r/learnjavascript/comments/jf19y6/creating_a_grid_using_divs/
function createGrid(x, y){
    for(let i = 0; i < x; i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        document.getElementById("grid-container").appendChild(rowDiv);
        createCells(i, y, rowDiv);
    }

    addFlexbox();
}

//CREATES THE CELLS TO POPULATE GRID
function createCells(i, y, rowDiv){
    for(let j = 0; j < y; j++){
        let cellDiv = document.createElement("div");       
        cellDiv.classList.add("cell");
        rowDiv.appendChild(cellDiv);
    }
}

//ADDS FLEXBOX
function addFlexbox(){

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
    }

}

//HOVERING EFFECT
function addHovering(){

    //RESOURCE: https://stackoverflow.com/questions/52563010/mouseenter-mouseleave-in-epmty-div-change-a-color-and-remove-it
    const boxes = document.querySelectorAll(".cell");
    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('mouseenter', colorenter);
        /*boxes[i].addEventListener('mouseleave', colorleave);*/
    }

    function colorenter(e){
        if(e.target.classList.contains('color')){
            e.target.style.backgroundColor = "#" + generateColor();
        }
        else {
            e.target.style.backgroundColor = "white";
    
        }

    /*
    function colorleave(e){
        e.target.style.backgroundColor = "lightsteelblue";
    }
    */
    }
}

/*ERASE THE GRID*/
function erase() {
    const gridDivs = document.querySelectorAll('#grid-container > div');

    gridDivs.forEach((item) => {
        const gridDiv = item;
        gridDiv.remove();
    });
}

/*CHANGING THE SIZE OF THE GRID CELLS*/
function changeSizeListener(){
    const small = 100;
    const medium = 50;
    const large = 2;

    sizeButtons.forEach((choice) => {
        choice.addEventListener('click', () => {   
            if(choice.classList.contains('small')) {
                erase();
                createGrid(small,small);
  
                addHovering();
            }
            if(choice.classList.contains('medium')) {
                erase();
                createGrid(medium,medium);

                addHovering();
            }
            if(choice.classList.contains('large')) {
                erase();
                createGrid(large,large);

                addHovering();
            }

        });
    });
}

function eraseListener () {
    const eraseButton = document.getElementById('erase');

    eraseButton.addEventListener('click', () => {
        erase();
        createGrid(50,50);

        addHovering();
    });
}

function colorListener () {
    const colorButton = document.getElementById('color');

    colorButton.addEventListener('click', () => {
        const gridDivs = document.querySelectorAll('.cell');

        gridDivs.forEach((item) => {
            item.classList.toggle("color");
        });
    });
}

function generateColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

/*CREATE INITIAL GRID ON LOAD*/
createGrid(50,50);

addHovering();
changeSizeListener();
eraseListener();
colorListener();