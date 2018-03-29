const rawArgs = process.argv.slice(2);
const args = [];

rawArgs.forEach(val => {
  const commaSep = val.split(",");
  commaSep.forEach(val => {
    if (val !== "") args.push(+val);
  });
});

const avg = (...args) => {
  return args.reduce((pre, cur) => pre + cur) / args.length;
};

console.log(avg(...args));
