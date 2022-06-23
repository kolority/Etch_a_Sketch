function generateGrid(size) {
  const container = document.getElementById("container");
  for (let i = 0; i < size*size; i += 1) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-item')
    container.appendChild(gridDiv);   
  }
  container.style.gridTemplateColumns = "repeat("+size+", auto)";
}
function removeGrid(){
  const container = document.querySelectorAll(".grid-item"); 
  container.forEach((item) => {    
    item.remove();
  });   
}
function setGridSize(){
  const gridButtons = document.querySelectorAll('.sizer')
  gridButtons.forEach((button) => {
    button.addEventListener('click', () =>{
      if(button.classList.contains('10x')){
        removeGrid();
        generateGrid(10);
      }else if(button.classList.contains('20x')){
        removeGrid();
        generateGrid(20);
      }else if(button.classList.contains('30x')){
        removeGrid();
        generateGrid(30);
      }
    })
  })
}
function generateColor(colors) {  
  const gridElements = document.querySelectorAll(".grid-item");
  gridElements.forEach((item) => {    
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = colors;
    });
  });
}
function chooseColor() {
  const colorButtons = document.querySelectorAll('.color');
  colorButtons.forEach((button) => {
    button.addEventListener('click', () => {      
      if (button.classList.contains('red')) {
        generateColor('#FF0000');
      } else if (button.classList.contains('green')) {
        generateColor("#00FF00");
      } else if (button.classList.contains('blue')) {
        generateColor("#0000FF");
      }else if (button.classList.contains('eraser')) {
        generateColor("aliceblue");
      }
    });
  });
}
generateGrid(10);
setGridSize();
chooseColor();