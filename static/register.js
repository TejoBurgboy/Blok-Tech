const gamekiezer = document.querySelector("#gamechoose");
const buttonInput = document.querySelector("button");
const games = ["Mario", "Pokemon", "Gta", "Fifa", "World of war craft", "Zelda", "Kirby", "Super Smash", "Heardstone", "League of Legends", "mario", "pokemon", "LOL", "WOWC", "minecraft", "Civ", "FM", "Football manager"];




let inputform = () => {
	console.log(gamekiezer);
	let gekozenGame = document.querySelector("input#gamechoose").value;
	console.log(gekozenGame);
	fetch(`https://api.rawg.io/api/games/${gamekiezer}key=cdc5e6a426f148f89089bd9f8c25dbe2`)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	if (games.includes(gekozenGame)) {
		alert("Game wordt in database gezet");
	} else {
		alert("Deze game bestaat niet");
	}
};

buttonInput.addEventListener("click", inputform);
