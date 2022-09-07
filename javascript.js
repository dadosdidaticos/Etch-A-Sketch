const container = document.querySelector('.container')
let gridArr = []
let isDrawing = false
function getGrid(){
    let gridSize = parseInt(prompt('Insira a resolução da malha até 100px. Ex.: 50 resultará numa malha de 50x50 px.'))
    while (isNaN(gridSize)|| gridSize<1 || gridSize>100){
        gridSize = parseInt(prompt('Entrada incorreta! Insira a resolução da malha até 100px. Ex.: 50 resultará numa malha de 50x50 px'))
    }
    elementSize = 560/gridSize
    for (var i=1;i<=gridSize**2;i++) gridArr.push(i);
    gridArr.forEach(()=>{
        newDiv = document.createElement('div')
        newDiv.classList.toggle('grid-element')
        newDiv.setAttribute('style',`width:${elementSize}px;`)
        newDiv.getAttribute('draggable')
        newDiv.setAttribute('draggable',false)
        container.appendChild(newDiv)
    })
    grid = document.querySelectorAll('.grid-element')
    gridDiv=document.querySelector('.container')
    gridDiv.addEventListener('mousedown',()=>{
        isDrawing = true
        console.log(isDrawing)
    })
    gridDiv.addEventListener('mouseup',()=>{
        isDrawing = false
        console.log(isDrawing)
    })
    grid.forEach((element)=>{
        element.addEventListener('mouseover',()=>{
            if (isDrawing == true) {
            element.classList.add('grid-element-paint')
        }
        })
    })
    return true
}

startButton = document.querySelector('#button-start')
startButton.addEventListener('click',getGrid)


