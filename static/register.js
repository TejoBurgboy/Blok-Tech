console.log("aap");
const gamekiezer = document.querySelector("#gamechoose");
const buttonInput = document.querySelector("button");
const games = ["Mario","Pokemon","Gta","Fifa","World of war craft", "Zelda", "Kirby","Super Smash", "Heardstone", "League of Legends", "mario", "pokemon","LOL", "WOWC", "minecraft", "Civ", "FM", "Football manager"];

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
