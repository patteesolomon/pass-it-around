const express = require('express');
const app = express();
const port = 3000;

var beer = 99;
var bugs = null;
var randP = null;
var lives = 7;

var linker = `<a href = '/:number_of_bottles'> "take one down pass it around" </a>`;

app.get('/' , (req, res) =>{
    res.send(
    `${beer} Bottles of beer on the wall ` + '\n' 
    + `${linker}` + '\n' 
    + `\n ${lives} Number of my lives wasted.`
    );
});

app.get('/:number_of_bottles', (req, res) => {
    --beer; // takes 2 
    if (beer == 0 || lives == 0) {
        res.send(
            `${beer} Bottles of beer on the wall ` + '\n' 
            + `` + '\n' 
            + `${lives} Number of my lives wasted.`
        );
    }
    else{
        res.send(
            `${beer} Bottles of beer on the wall ` + '\n' 
            + `${linker}` + '\n' 
            + `${lives} Number of my lives wasted.`
        );
    }
});

app.listen(port, () => {
    console.log('listening');
});