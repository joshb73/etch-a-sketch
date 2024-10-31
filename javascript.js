let gridCounter = 256;
let gridContainer = document.getElementById("grid-container");

for(let i = 0; i < gridCounter; i++){
    let gridDiv = document.createElement("div");
    gridDiv.className = "grid-block";
    gridDiv.style.width = "48px";
    gridDiv.style.height = "48px";
    gridDiv.style.backgroundColor = "gray";
    gridDiv.style.margin = "5px";

    gridContainer.appendChild(gridDiv);
}

let gridBlock = document.querySelectorAll(".grid-block");

let gridBlockArray = Array.from(gridBlock);

console.log(gridBlockArray);

gridBlockArray.forEach(function(elem){
    elem.addEventListener("mouseenter", () =>{
        console.log("here");
        elem.style.backgroundColor = "blue";
    });
});

console.log(gridCounter);