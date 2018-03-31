let fs = require("fs");

function run(generator) {
  const it = generator(go);

  function go(err, result) {
    if (err) {
      return it.throw(err);
    } else {
      it.next(result);
    }
  }
  go();
}

run(function*(done) {
  let dirFiles, firstFile;
  try {
    dirFiles = yield fs.readdir("NoNoNoNo", done);
    firstFile = dirFiles[0];
  } catch (err) {
    firstFile = null;
  }

  console.log(firstFile);
});
