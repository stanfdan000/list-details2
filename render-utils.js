export function renderTable(pTable) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('table-card');

    p.textContent = pTable.name;
    img.src = `./assets/${pTable.Pimg}`;
    a.href = `./detail/?id=${pTable.id}`;
    
    div.append(p, img);
    a.append(div);
    return a;
}


export function renderTableDetails(pTable) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEL = document.createElement('p');
    const numberEL = document.createElement('p');
    const typeEl = document.createElement('p');
    const PimgEL = document.createElement('p');
    const pEL = document.createElement('p');

    div.classList.add('table-Details');
    nameEL.textContent = pTable.name;
    nameEL.classList.add('name');
    numberEL.textContent = pTable.numberEL;
    numberEL.classList.add('number');

}