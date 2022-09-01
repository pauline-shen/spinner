const toPrint = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let time = 100;

for (let char of toPrint) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, time);
  time += 200;
}