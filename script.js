function defaultGridSize(){
    const sketch = document.querySelector('.sketchBox')
    console.log(sketch)
    for(let i=0; i<16; i++){
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