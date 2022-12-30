let container = document.querySelector('.container');



for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let i = 0; i < 16; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
    }
    container.appendChild(row);
}

let allCellList = document.querySelectorAll('.cell');

for (let i = 0; i < allCellList.length; i++) {
    allCellList[i].addEventListener('mouseenter', () => {
        allCellList[i].style.backgroundColor = "blue";
    });
}

//total width and height is 800px


const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};


const alertButton = document.querySelector('.alert-button');
alertButton.addEventListener('click', () => {
    let sketchPadSize = parseInt(prompt("Enter a number for the size of the sketch pad! (MAX 64)"));
    if (sketchPadSize > 64) {
        sketchPadSize = 64;
    }

    removeChilds(container);

    let cellHeightWidth = 800 / sketchPadSize;

    for (let i = 0; i < sketchPadSize; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let i = 0; i < sketchPadSize; i++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.width = `${cellHeightWidth}px`;
            cell.style.height = `${cellHeightWidth}px`;
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

    console.log(container);
    let allCellList = document.querySelectorAll('.cell');

    for (let i = 0; i < allCellList.length; i++) {
        allCellList[i].addEventListener('mouseenter', () => {
            allCellList[i].style.backgroundColor = "blue";
        });
    }
})


console.log(allCellList);