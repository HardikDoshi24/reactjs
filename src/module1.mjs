import ui from "./module2.js";
console.log(ui);

// Terminal : node ./module1.mjs
// Output : Aakash (because by default export)

import ui, {a,b,d} from "./module2.js";
// {} -- used if it is not exporting by default
console.log(ui);
console.log(a);
console.log(b);
console.log(d);
// Output : all a,b,c,d