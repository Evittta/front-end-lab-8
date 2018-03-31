function* factorial(n) {
  let pre = 1;
  for (let i = 1; i <= n; i++) {
    pre *= i;
    yield pre;
  }
}

for (const n of factorial(5)) {
  console.log(n);
}
