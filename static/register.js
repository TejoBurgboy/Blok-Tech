const gamekiezer = document.querySelector("#gamechoose");
const buttonInput = document.querySelector("button");
const games = ["Mario", "Pokemon", "Gta", "Fifa", "World of war craft", "Zelda", "Kirby", "Super Smash", "Heardstone", "League of Legends", "mario", "pokemon", "LOL", "WOWC", "minecraft", "Civ", "FM", "Football manager"];

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b3b04ef67mshb9494ce2457e3c4p130cadjsn6c5d39bb1752',
		'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
	}
};

fetch('https://rawg-video-games-database.p.rapidapi.com/games', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


let inputform = () => {
	console.log(gamekiezer);
	let gekozenGame = document.querySelector("input#gamechoose").value;
	console.log(gekozenGame);
	

	if (games.includes(gekozenGame)) {
		alert("Game wordt in database gezet");
	} else {
		alert("Deze game bestaat niet");
	}
};

buttonInput.addEventListener("click", inputform);
