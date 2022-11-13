const api = 'https://www.breakingbadapi.com/api/characters';

async function getData() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        printData(data);
    }catch(error) {
        console.log("Error: ", error.message);
    }
   
}

function printData(data) {
    document.querySelector('#shochara').innerHTML = 
    `
        <select class="form-select" aria-label="Default select example" onchange="getChara(this.value)">
            <option selected>Open this select menu</option>
            ${data.map(characters => `<option>${characters.name}</option>`)}
        </select>
    `
}
   
async function getChara(chara) {
    const res = await fetch(`${api}?name=${chara}`);
    const data = await res.json();
    document.querySelector('#title-name').innerHTML = 
    `
        <h2 class="text-center mt-2 text-white">${data[0].name} (${data[0].nickname})</h2>
        <h3 class="text-center mt-3 text-white">Character: ${data[0].portrayed}</h3>
        <img src="${data[0].img}" class="img-fluid" alt="characters"> 
    `
}

getData();