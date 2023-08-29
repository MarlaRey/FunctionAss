// Find knappen i DOM
const calculateButton = document.getElementById('calculateButt');

// Tilføj en event listener til knappen
calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    gatherInputData();
});

// Funktion til at indsamle data fra formularen og kalde beregningsfunktionen
function gatherInputData() {
    // Hent værdierne fra input-felterne
    const myEuroRate = parseFloat(document.getElementById('euroRate').value);
    const myDollarRate = parseFloat(document.getElementById('dollarRate').value);
    const myDanishAmount = parseFloat(document.getElementById('danishAmount').value);

    // Kald beregningsfunktionen og send data med
    const euroResult = calculateExchange(myDanishAmount, myEuroRate);
    const dollarResult = calculateExchange(myDanishAmount, myDollarRate);

    // Kald view-funktionen for at vise resultaterne
    showResult(euroResult, dollarResult, myDanishAmount);
}

// Funktion til beregning af valutakurs
function calculateExchange(amountDKK, exchangeRate) {
    const exchangedAmount = amountDKK / exchangeRate;
    return exchangedAmount;
}

// Vis resultatet i view-funktionen
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';
}







