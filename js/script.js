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
    userNumbers = askToUser(maxNumbers);
    numbersCheck(numbersToGuess, userNumbers, numbersInHTML);
}, disappearTimeout * 1000);


function randomNumberTo50() {
    const num = Math.floor(Math.random() * 50) + 1;
    console.log('numero casuale da 1 a 50: ' + num);
    return num;
}


function clearHTMLElement(element) {
    element.innerHTML = '';
}


function askToUser(maxRequest) {

    const userNumbers = [];

    for (let i = 0; i < maxRequest; i++) {
        do {
            // Inserimento numero
            userNumbers[i] = parseInt(prompt('Inserire numero:'));

            // Messaggio di errore
            isNaN(userNumbers[i]) ? alert('Non hai inserito un numero, riprova.') : '';

        } while (isNaN(userNumbers[i]));

        console.log(i, userNumbers[i]);
    }

    return userNumbers;

}


function numbersCheck(array1, array2, HTMLShower) {

    let rightGuessed = 0;

    // Controllo numeri
    for (let i = 0; i < array1.length; i++) {
        console.log(i, array1[i])
        array2.includes(array1[i]) ? rightGuessed++ : console.log('Nisba');
    }

    // Messaggio per i numeri trovati

    if (rightGuessed > 0) {
        // Messaggio diversi se sono tutti esatti
        rightGuessed === array1.length ? HTMLShower.innerHTML = `<div class="numbers">Tutti i numeri indovinati. Che memoria!</div>`
            : HTMLShower.innerHTML = `<div class="numbers">Hai indovinato ${rightGuessed} numeri! Complimenti!</div>`;
    } else {
        HTMLShower.innerHTML = `<div class="numbers">Nessun numero indovinato. Provaci ancora!</div>`
    }

}
