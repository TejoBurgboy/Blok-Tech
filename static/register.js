console.log("aap");
const gamekiezer = document.querySelector("#gamechoose");
const buttonInput = document.querySelector("button");
const games = ["Mario","Pokemon","Gta","Fifa","World of war craft", "Zelda", "Kirby","Super Smash", "Heardstone", "League of Legends", "mario", "pokemon","LOL", "WOWC", "minecraft", "Civ", "FM", "Football manager"];

//fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
    //"method": "GET",	
//"headers": {
		//"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
		//"x-rapidapi-key": "8b3b04ef67mshb9494ce2457e3c4p130cadjsn6c5d39bb1752"
	//}
//})
// 	.then(res => {
// 	return res.json();
 //}).then(data => {
 	//console.log(data);
 //});


let inputform = () => {
console.log(gamekiezer);
let gekozenGame = document.querySelector("input#gamechoose").value;
console.log(gekozenGame);
if ( games.includes(gekozenGame)){
    alert("Game wordt in database gezet");
} else{
    alert("Deze game bestaat niet");
}
};

buttonInput.addEventListener("click", inputform);