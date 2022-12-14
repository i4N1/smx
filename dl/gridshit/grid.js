const anime = require('animejs');
const wrapper = document.getElementById("tiles");


let columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);

const createTile = index => {
    const tile = document.createElement("div");

    tile.classList.add("tile");
    
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile,index) => {
        wrapper.appendChild(createTile(index));
    })
}

createTiles(columns * rows);