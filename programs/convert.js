// Convert from binary core dump to Antares core dump
fs = require("node:fs");
let data = fs.readFileSync("core.dat");
let view = new DataView(data.buffer);
let str = "";
for (let i = 0; i < 4096; i++) {
	str += view.getUint16(2 * i, true).toString(16) + " ";
}
fs.writeFileSync("core.ex", str);
