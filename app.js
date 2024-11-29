const tableSize = 5;
const numbersTable = document.getElementById('numbersTable');
let currentRow = 0;
let currentCol = 0;

function initializeTable() {
  numbersTable.innerHTML = ''; 
  for (let i = 0; i < tableSize; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < tableSize; j++) {
      const cell = document.createElement('td');
      cell.textContent = ''; 
      row.appendChild(cell);
    }
    numbersTable.appendChild(row);
  }
  currentRow = 0;
  currentCol = 0;
}

function addRandomNumber() {
  if (currentRow >= tableSize) {
    initializeTable(); 
    return;
  }

  const randomNumber = Math.floor(Math.random() * 100); 
  const row = numbersTable.rows[currentRow];
  const cell = row.cells[currentCol];
  cell.textContent = randomNumber; 

  currentCol++;
  if (currentCol >= tableSize) {
    currentCol = 0;
    currentRow++;
  }
}

document.getElementById('addNumberButton').addEventListener('click', addRandomNumber);

initializeTable();
