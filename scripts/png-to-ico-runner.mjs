import pngToIco from "png-to-ico";
import { writeFileSync } from "fs";
import { resolve } from "path";

const buf = await pngToIco([
  resolve("public/favicon-16x16.png"),
  resolve("public/favicon-32x32.png"),
]);
writeFileSync(resolve("public/favicon.ico"), buf);
console.log("OK favicon.ico");
