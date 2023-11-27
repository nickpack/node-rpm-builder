import chalk from "chalk";
import * as util from "util";

export default function() {
  let msg = util.format.apply(null, arguments);

  process.stdout.write(msg + '\n');
}
