const amountEuro = Number(prompt(`Please input amount of euro`, `10`));
const amountUsd = Number(prompt('Please input amount of usd', `10`));
const euro = 33.2324;
const usd = 27.124;

console.log(`${amountEuro} euro are equal ${parseInt(amountEuro * euro)} UAH, 
${amountUsd} are equal ${parseInt(amountUsd * usd)} UAH, 
one euro is equal ${parseFloat(euro / usd).toFixed(2)} dollars`);