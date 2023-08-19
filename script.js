const sketch = document.querySelector('.sketchBox') //declaring sketch global
// defaultGridSize() work is generate default  div box for grid of 16*16
function defaultGridSize(){
    console.log(sketch)
    for(let i=0; i<256; i++){
        const box = document.createElement('div')
        box.classList.add('items')
        sketch.appendChild(box)
    }
    const columnCount = 16;
    const rowCount = 16;
    sketch.style.setProperty('--column-count', columnCount)
    sketch.style.setProperty('--row-count', rowCount)
}
window.addEventListener('load',defaultGridSize)

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

