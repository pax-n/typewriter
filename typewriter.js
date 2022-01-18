const sentence = "hello there from lighthouse labs";

let timer = 0;
let nextSentence = `${sentence}\n`

for (const char of nextSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer+= 50)// <= 1s delay to make it noticeable. Can dial it down later.
}