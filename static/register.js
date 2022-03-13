console.log("aap");
let naamveld = document.querySelector("#Naamveld");
let mailveld = document.querySelector("#Mailveld");
let passwordveld = document.querySelector("#Passwordveld");
let buttonInput = document.querySelector("button");

let inputform = () => {
    let nameinput = document.querySelector("input#name").value;
    let passwordinput = document.querySelector("input#wachtwoord").value;
    let mailinput = document.querySelector("input#mail").value;
    naamveld.textContent = nameinput;
    mailveld.textContent = mailinput;
    passwordveld.textContent = passwordinput;
    console.log(nameinput, passwordinput, mailinput);
};

buttonInput.addEventListener("click", inputform);