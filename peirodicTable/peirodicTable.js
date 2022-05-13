import { getTable } from '../fetch-utils.js';
import { renderTableDetails } from '../render-utils.js';

const pTableContainer = document.getElementById('pTableContainer')
async function loadData() {
    const par = new URLSearchParams(window.location.search);
    const pTable = await getTable(par.get('id'));
    const detail = renderTableDetails(pTable);
    pTableContainer.append(detail);
}

loadData();