const container = document.querySelector('.container');



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

const allCellList = document.querySelectorAll('.cell');

for (let i = 0; i < allCellList.length; i++) {
    allCellList[i].addEventListener('mouseenter', () => {
        allCellList[i].style.backgroundColor = "blue";
    });
}

console.log(allCellList);