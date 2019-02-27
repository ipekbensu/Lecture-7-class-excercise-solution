var fetch = require('node-fetch');

var apiKey = 'cd44503873bb4cab99f83ef6743e3c5e';
var headlines = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

async function fetchNews(){
	var res  = await fetch(headlines);
	var json = await res.json();

	json.articles.forEach(article => {
		console.log(article);
	});
}
fetchNews();