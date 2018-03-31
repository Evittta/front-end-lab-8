function* range(from, to) {
  while (from <= to) {
    yield from++;
  }
}

for (const r of range(5, 10)) {
  console.log(r);
}
