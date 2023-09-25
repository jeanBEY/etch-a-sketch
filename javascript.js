//const newDiv = document.createElement("div");
//newDiv.classList.add("square");
//console.log(newDiv);
//document.getElementById("flex-container").appendChild(newDiv);

function createRowDiv(x, y){
    for(let i = 0; i < x; i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        document.getElementById("grid-container").appendChild(rowDiv);
        createRow(i, y, rowDiv);
    }
}

function createRow(i, y, rowDiv){
    for(let j = 0; j < y; j++){
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        rowDiv.appendChild(cellDiv);
    }
}

createRowDiv(3,2);