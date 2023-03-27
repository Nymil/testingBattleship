"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    const $boardContainer = document.querySelector('.board-container');
    generateBoard($boardContainer, 10, 10);
}

function generateBoard($container, cols, rows) {
    for (let row = 0; row < rows; row++) {
        let rowInsertion = "<tr>";
        for (let col = 0; col < cols; col++) {
            rowInsertion += `<td><div class="cell" data-col="${col}" data-row="${row}"></div></td>`;
        }
        rowInsertion += "</tr>";
        $container.insertAdjacentHTML('beforeend', rowInsertion);
    }
}