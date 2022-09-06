console.log('JS OK');

const numbersInHTML = document.getElementById('number-display');

const maxNumbers = 5;

const disappearTimeout = 30;
let numbersToGuess = [];

/* Necessito di:
    DONE    funzione randomNumber
    DONE    ciclo che mi crea i div.numbers con relativo numero casuale
    DONE    funzione temporale per eliminare i numeri
    DONE    prompt per chiedere numeri in ingresso
    DONE    confronto numeri dopo averli identificati
    DONE    messaggio di vittoria/sconfitta
*/

for (let i = 0; i < maxNumbers; i++) {
    numbersToGuess = randomUniqueNumberTo50(maxNumbers);
    console.log(numbersToGuess[i]);
    numbersInHTML.innerHTML += `<div class="numbers to-guess">${numbersToGuess[i]}</div>`;
}

setTimeout(function () {
    clearHTMLElement(numbersInHTML);
    setTimeout(function () {
        userNumbers = askToUser(maxNumbers);
        numbersCheck(numbersToGuess, userNumbers, numbersInHTML);
    }, 100)
}, disappearTimeout * 1000);


function randomNumberTo50() {
    const num = Math.floor(Math.random() * 50) + 1;
    console.log('numero casuale da 1 a 50: ' + num);
    return num;
}


function randomUniqueNumberTo50(maxLength) {
    const nums = [];

    for (let i = 0; i < maxLength; i++) {

        const num = Math.floor(Math.random() * 50) + 1;
        if (!nums.includes(num)) {
            nums.push(num)
        }

    }

    return nums;

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
    const displayArray = []

    // Controllo numeri
    for (let i = 0; i < array1.length; i++) {
        console.log(i, array1[i])

        if (array2.includes(array1[i])) {
            rightGuessed++;
            // Inseriamo in un array a parte i numeri corretti
            displayArray.push(array1[i]);
            console.log('Giusto!')
        } else {
            console.log('Sbagliato!')
        }

    }

    console.log('Array display: ', displayArray)

    // Messaggio per i numeri trovati

    if (rightGuessed > 0) {

        // Messaggio diverso se sono tutti esatti
        if (rightGuessed === array1.length) {
            HTMLShower.innerHTML = `<div class="numbers">Tutti i numeri indovinati. Che memoria!</div>`
            HTMLShower.innerHTML += `<div class="numbers">I numeri erano: ${array1.join(' - ')}</div>`
        } else {
            HTMLShower.innerHTML = `<div class="numbers">Hai indovinato ${rightGuessed} numeri! Complimenti!</div>`;
            HTMLShower.innerHTML += `<div class="numbers">I numeri indovinati sono: ${displayArray.join(' - ')}</div>`;
        }

    } else {
        HTMLShower.innerHTML = `<div class="numbers">Nessun numero indovinato. Provaci ancora!</div>`
        HTMLShower.innerHTML += `<div class="numbers">I numeri esatti erano: ${array1.join(' - ')}</div>`
    }

}
