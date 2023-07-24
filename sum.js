const args = process.argv.slice(2);

let sum = 0;
for (let i = 0; i < args.length; i++) {
  const number = parseFloat(args[i]);
  if (!isNaN(number)) {
    sum += number;
  }
}

console.log("Result:", sum);