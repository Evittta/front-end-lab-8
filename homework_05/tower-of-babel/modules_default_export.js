let arg1 = process.argv[2];
let arg2 = process.argv[3];

import Data from "./modules_default_export_math";
console.log(Data.PI);
console.log(Data.sqrt(+arg1));
console.log(Data.square(+arg2));
