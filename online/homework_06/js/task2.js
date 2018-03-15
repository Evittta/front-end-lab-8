const euro = 33.2324;
const usd = 27.124;
let amountEuro = Number(prompt(`Please input amount of euro`, `10`));
let amountUsd = Number(prompt('Please input amount of usd', `10`));

let euroToUah = parseFloat((amountEuro * euro).toFixed(2));
let dollarToUah = parseFloat((amountUsd * usd).toFixed(2));
let euroToDollar = parseFloat((euro / usd).toFixed(2));

if(amountEuro < 0 || amountUsd < 0 || isNaN(amountEuro) || isNaN(amountUsd)) {
    console.error(`Incorrect data`);
} else {
    console.log(`${amountEuro} euro are equal ${euroToUah} UAH, ${amountUsd} dollars are equal ${dollarToUah} UAH, one euro is equal ${euroToDollar} dollars`);
}
