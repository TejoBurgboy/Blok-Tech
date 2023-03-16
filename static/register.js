const gamekiezer = document.querySelector("#gamechoose");
const buttonInput = document.querySelector("button");
const submitBtn = document.getElementById("submit-btn");
const gameCheck = document.getElementById("game-check");
submitBtn.disabled = true;
let inputform = () => {
	console.log(gamekiezer);
	let gekozenGame = document.querySelector("input#gamechoose").value;
	console.log(gekozenGame);
	fetch(
		`https://api.rawg.io/api/games/${gekozenGame
			.replace(/\s+/g, "-")
			.toLowerCase()}?key=cdc5e6a426f148f89089bd9f8c25dbe2`
	)
		.then((response) => response.json())
		.then((data) => {
			if (!data.detail) {
				submitBtn.disabled = false;
				alert("Deze game bestaat");
			} else {
				alert("Deze game bestaat niet");
			}
		})
		.catch((err) => console.error(err), );
};
gameCheck.addEventListener("click", inputform);