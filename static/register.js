const gameKiezer = document.querySelector("#gamechoose");
const buttonInput = document.querySelector("button");
const submitBtn = document.getElementById("submit-btn");
const gameCheck = document.getElementById("game-check");
//Het uit zetten van de registeer knop zodat de gebruiker niet kan reageren zonder een juiste game te hebben. Ook wordt de button zelf dissabeld.
submitBtn.disabled = true;
submitBtn.classList.add("forum_button_disabeld");
gameCheck.classList.remove("forum_button_disabeld");


let inputform = () => {
	console.log(gameKiezer);
	let gekozenGame = document.querySelector("input#gamechoose").value;
	console.log(gekozenGame);
	fetch(
		`https://api.rawg.io/api/games/${gekozenGame
			//Deze code zorgt ervoor dat een spatie in een streepje wordt vervangen.
			.replace(/\s+/g, "-")
			//verandert de tekst in van de gekozen game in lowercase.
			.toLowerCase()}?key=cdc5e6a426f148f89089bd9f8c25dbe2`
	)
		.then((response) => response.json())
		//Hierbij wordt gekeken of de game terug te vinden is in de database. Als dat het geval is krijgt de gebruiker een alert dat het gelukt is als dat niet het geval krijgt de gebruiker een alert dat het niet gelukt is.
		.then((data) => {
			if (!data.detail) {
				//Activeert te registreet knop
				submitBtn.disabled = false;
				submitBtn.classList.remove("forum_button_disabeld")
				alert("Dit is een bestaande game");
			} else {
				alert("Sorry we hebben deze game niet kunnen vinden probeer opnieuw");
			}
		})
		.catch((err) => console.error(err),);
};
gameCheck.addEventListener("click", inputform);