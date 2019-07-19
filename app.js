
function grid() {
        /*let y = document.querySelector('.grid-input').value;*/

        let x = 10;

        const container = document.querySelector('.container');

        for (let row = 0; row <= x; row++) {

            const divRow = document.createElement('div');

            for (let cell = 0; cell <= x; cell++) {    
                
                const div = document.createElement('div');

                div.style.display= 'inline-block';
                div.style.height = '0';
                div.style.width = '5%';
                div.style.paddingBottom = '5%';
                div.style.border= ('1px solid black');
                div.style.backgroundColor =('lightpink');

                divRow.appendChild(div);

                div.addEventListener('mouseover', () => {
                    div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    //div.style.backgroundColor = 'inherit';

                });
        }
        
        container.appendChild(divRow);
    }

}

const gridSize = document.querySelector('.generate-grid');

gridSize.addEventListener('click', grid());




/*    
if (row == x) {
    container.appendChild(document.createElement('br'));
}

*/