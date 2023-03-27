"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    generateBoard(10, 10);
}

function generateBoard(cols, rows) {
    const $boardTable = document.querySelector('.board-container')
    for (let row = 0; row < rows; row++) {
        let rowInsertion = "<tr>";
        for (let col = 0; col < cols; col++) {
            rowInsertion += `<td><div class="cell" data-col="${col}" data-row="${row}"></div></td>`;
        }
        rowInsertion += "</tr>";
        $boardTable.insertAdjacentHTML('beforeend', rowInsertion);
    }
}