import { renderTable, } from './render-utils.js';
import { getTable } from './fetch-utils.js';

const pTableContainer = document.getElementById('pTable-Container');
async function loadData() {
    const pTable = await getTable();
    for (let table of pTable) {
        const PT = renderTable(table);
        pTableContainer.append(PT);
    }
}
loadData();
// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
