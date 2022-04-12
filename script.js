//query container from box container
const container=document.querySelector('.boxContainer');
//start with 90 by 90 grid
boxGrid(90);

//button to clear screen and ask for how large new canvas should be
const button=document.querySelector('#btn');
button.addEventListener('click', ()=>{
    const boxes=document.querySelectorAll('div');
    boxes.forEach((box)=>{
        box.style.backgroundColor='white';
    })

    newBoxAmount=parseInt(prompt('Enter how many rows you want (max 200 rows)'));
    if (newBoxAmount>200){
        newBoxamount=200;
    }
    boxGrid(newBoxAmount);
})

//remove all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//create box grid
function boxGrid(boxAmount){
    removeAllChildNodes(container);
    for (let i=0; i<boxAmount; i++){
        const boxColumn=document.createElement('div');

        boxColumn.style.flexGrow='1';
        boxColumn.style.display='flex';
        boxColumn.style.flexDirection='column';

        for (let j=0; j<boxAmount;j++){
            const boxRow = document.createElement('div');
            boxRow.style.flexGrow='1';

            //color in square
            boxRow.addEventListener('mouseover', e=>{
                boxRow.style.backgroundColor=generateRandomColor();

            })
            boxColumn.appendChild(boxRow);
        }
        container.appendChild(boxColumn);
    }
}

//generate random color
const generateRandomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}