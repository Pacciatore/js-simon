console.log('JS OK');

const numbersInHTML = document.getElementById('number-display');
console.log(numbersInHTML.innerHTML);
const maxNumbers = 5;

/* Necessito di:
    DONE    funzione randomNumber
    ciclo che mi crea i div.numbers con relativo numero casuale
    funzione temporale per eliminare i numeri
    prompt per chiedere numeri in ingresso
    confronto numeri dopo averli identificati
    messaggio di vittoria/sconfitta
*/

for (let i = 0; i < maxNumbers; i++) {
    const numberInside = randomNumberTo50();
    console.log(numberInside);
    numbersInHTML.innerHTML += `<div class="numbers">${numberInside}</div>`;

}


function randomNumberTo50() {
    const num = Math.floor(Math.random() * 50) + 1;
    console.log('numero casuale da 1 a 50: ' + num);
    return num;
}