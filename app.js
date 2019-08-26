
function grid(gridCount) {

        const container = document.querySelector('.container');

        container.innerHTML = "";  //clear the grid
        
        if (gridCount != 0) {

            for (let row = 0; row < gridCount; row++) {

                const gridRow = document.createElement('div');
                gridRow.style.lineHeight = '0';
    
                for (let cell = 0; cell < gridCount; cell++) {    
                    
                    const div = document.createElement('div');
    
                    div.style.display= 'inline-block';
                    div.style.lineHeight= '0';
                    div.style.height = (640 / gridCount) + 'px';
                    div.style.width = (640 / gridCount) + 'px';
                    //div.style.paddingBottom = '5%';
                    div.style.border= ('1px solid black');
                    div.style.backgroundColor =('lightpink');
                    div.classList.add('cell');
    
                    gridRow.appendChild(div);
    
                    div.addEventListener('mouseover', () => {
                        div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    
                    });
            }
            
            container.appendChild(gridRow);
        }
     }        


}

function clear() {
    const cell = document.querySelectorAll('.cell');
    
    for(let i = 0; i < cell.length; i++) {
        cell[i].style.backgroundColor = "lightpink";
    }
}


const gridSize = document.querySelector('.generate-grid');
const gridClear = document.querySelector('.grid-clear');

window.addEventListener('load', () => {
    grid(8);
});

gridSize.addEventListener('click', () => {
    const gridInput = document.querySelector('.grid-input').value;
    grid(gridInput);
});

gridClear.addEventListener('click', clear);


/*    
if (row == x) {
    container.appendChild(document.createElement('br'));
}

*/

  /*let y = document.querySelector('.grid-input').value;*/