const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};

const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
};

const doAsyncMagic = async () => {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(await asyncFn());
  }
  console.log(arr);
};

doAsyncMagic();

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

const iterateRange = async () => {
  let sum = 0;
  for await (const r of rangeGen()) {
    sum += r;
  }
  return sum;
};

iterateRange();
