const inputs = process.argv.slice(2);

let result = inputs.map(item => item[0]).reduce((pre, cur) => pre + cur);

console.log(result);
