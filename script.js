const sketch = document.querySelector('.sketchBox') //declaring sketch global
// defaultGridSize() work is generate default  div box for grid of 16*16
let size = 16
function defaultGridSize(size){
    // console.log(sketch)
    const gridSize = size * size
    for(let i=0; i<gridSize; i++){
        const box = document.createElement('div')
        box.classList.add('items')
        sketch.appendChild(box)
    }
    const columnCount = size;
    const rowCount = size;
    sketch.style.setProperty('--column-count', columnCount)
    sketch.style.setProperty('--row-count', rowCount)
}
window.addEventListener('load',defaultGridSize(size))

// when ever user click on black button than mouse over on grid change into black 
const blackColorBtn = ()=>{
        sketch.addEventListener('mouseover',function(event){
            if(event.target.classList.contains('items')){
                event.target.style.backgroundColor = 'black';
            }
        })
    }
const blackBtn = document.querySelector('.btn-black')
blackBtn.addEventListener('click',blackColorBtn)

// when user click on random btn it generate random color for grid background 
const randomColorGenerate = function() {
    const randomNumber = () => Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    sketch.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('items')) {
            event.target.style.backgroundColor = rgbColor;
        }
    })
}

const randomBtn = document.querySelector('.btn-rc');
randomBtn.addEventListener('click', randomColorGenerate);

// when user click on reset the grid color will change into white
const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click',function(){
    const itemsElement = document.querySelectorAll('.items')
    itemsElement.forEach(item =>{
        item.style.backgroundColor = 'white';
    })
})

// user input for grid layout change 1 to 64
const gridSize = function(){
    input = prompt("Enter the Size of grid 1 to 64") 
    const checkCorrectInput = /^[1-9][0-9]?$|^64$/;
    if(!input.match(checkCorrectInput)){
        alert('Please a valid number')
    }
    else{
        const itemsElement = document.querySelectorAll('.items')
        itemsElement.forEach(item =>{
            sketch.removeChild(item);
        })
        defaultGridSize(input)
    }
}
const gridBtn = document.querySelector('.gridSize')
gridBtn.addEventListener('click',gridSize)