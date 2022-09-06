console.log('JS OK');

const numbersInHTML = document.getElementById('number-display');
console.log(numbersInHTML.innerHTML);
const maxNumbers = 5;

const disappearTimeout = 2;
const numbersToGuess = [];

/* Necessito di:
    DONE    funzione randomNumber
    DONE    ciclo che mi crea i div.numbers con relativo numero casuale
    DONE    funzione temporale per eliminare i numeri
    prompt per chiedere numeri in ingresso
    confronto numeri dopo averli identificati
    messaggio di vittoria/sconfitta
*/

for (let i = 0; i < maxNumbers; i++) {
    const numberInside = randomNumberTo50();
    numbersToGuess[i] = numberInside;
    console.log(numberInside);
    numbersInHTML.innerHTML += `<div class="numbers">${numberInside}</div>`;
}

setTimeout(function () {
    clearHTMLElement(numbersInHTML);
    askToUser();
}, disappearTimeout * 1000);


function randomNumberTo50() {
    const num = Math.floor(Math.random() * 50) + 1;
    console.log('numero casuale da 1 a 50: ' + num);
    return num;
}


function clearHTMLElement(element) {
    console.log(element);
    element.innerHTML = '';
    console.log(numbersToGuess);
}


function askToUser() {
    const userNumber = prompt('Inserire numero:');
    console.log(userNumber)
}
