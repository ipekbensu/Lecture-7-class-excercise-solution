var fetch = require('node-fetch');

var url = 'https://onexi.org/data/users.json';

fetch(url) 
.then(res => res.json())
.then(json => console.log(json[0]));