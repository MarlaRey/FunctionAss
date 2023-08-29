
//Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    //alert('Jeg vil gerne kalde en funktion der kan regne valutaen ud...');
    gatherInputData();
});




// indsamling af data fra dom (model code fra MVC)
// Funktion 1: gatherInputData
function gatherInputData() {
    // Hent værdierne fra DOM-elementerne
    const myEuroRate = parseFloat(document.getElementById('euroRate').value);
    const myDollarRate = parseFloat(document.getElementById('dollarRate').value);
    const myDanishAmount = parseFloat(document.getElementById('danishAmount').value);

    // Kald makeExchange funktionen med de indsamlede data
    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}




// håndterer data behandling  (controller code fra MVC)
// Funktion 2: makeExchange
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
    // Kald calculateExchange to gange med forskellige vekselrater
    const euroResult = calculateExchange(myDanishAmount, myEuroRate);
    const dollarResult = calculateExchange(myDanishAmount, myDollarRate);

    // Vis resultaterne ved at kalde showResult funktionen
    showResult(euroResult, dollarResult, myDanishAmount);
}


// sub funktion der udfører en opgave og returnerer et resultat.  stadig controller code i MVC
// Funktion 3: calculateExchange
function calculateExchange(amountDKK, exchangeRate) {
    // Beregn det udvekslede beløb
    const exchangedAmount = amountDKK / exchangeRate;

    // Returner det udvekslede beløb
    return exchangedAmount;
}


// viser resultatet  (view code fra MVC)
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';

}







