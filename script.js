function mostrarPorfileButtons() {
    // Oculta el login-screen
    document.getElementById('buttons-header').style.display = 'none';
    // Muestra la otra pantalla
    document.getElementById('profile-header').style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const grids = document.querySelectorAll('.grid');

    grids.forEach(grid => {
        for (let i = 0; i < 30; i++) {
            const columnCount = grid.id === 'grid2' ? 10 : 5;
            for (let j = 0; j < columnCount; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                grid.appendChild(cell);
            }
        }
    });

    // Randomly mark adjacent cells as taken in groups of 1, 2, 3, or 4
    const cells = document.querySelectorAll('.cell');
    const columnCount1 = 5; // Columns for grid1 and grid3
    const columnCount2 = 10; // Columns for grid2

    let markedCount = 0;

    while (markedCount < 260) { // Aumentamos el límite a 260
        const gridIndex = Math.floor(Math.random() * 3); // Randomly choose one of the grids
        const grid = grids[gridIndex];
        const columnCount = grid.id === 'grid2' ? columnCount2 : columnCount1;
        const totalCells = columnCount * 30;

        // Get a random starting index
        const startIndex = Math.floor(Math.random() * totalCells);
        const groupSize = Math.floor(Math.random() * 4) + 1; // Randomly choose 1, 2, 3, or 4

        // Check if the group can fit horizontally
        if ((startIndex % columnCount) + groupSize <= columnCount) {
            let canPlace = true;
            // Check if any cell in the group is already taken
            for (let i = 0; i < groupSize; i++) {
                if (grid.children[startIndex + i].classList.contains('taken')) {
                    canPlace = false;
                    break;
                }
            }
            if (canPlace) {
                // Mark the group as taken
                for (let i = 0; i < groupSize && markedCount < 260; i++) {
                    const cell = grid.children[startIndex + i];
                    cell.classList.add('taken');
                    markedCount++;
                }
            }
        }
    }

    // Add click event to toggle red color
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
            const cells = document.querySelectorAll('.cell.clicked');
            const valueElement = document.getElementById('value');
            const moneyElement = document.getElementById('money');
            valueElement.textContent = cells.length.toString();
            moneyElement.textContent = "$"+(cells.length * 2000).toString();
        });
    });
});

// SUMA TICKETS
document.addEventListener('DOMContentLoaded', () => {
    const valueElement = document.getElementById('value');
    let value = 0;

    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    incrementButton.addEventListener('click', () => {
        value++;
        updateValue();
    });

    decrementButton.addEventListener('click', () => {
        if (value > 0) {
            value--;
            updateValue();
        }
    });

    function updateValue() {
        valueElement.textContent = value;
    }
});
