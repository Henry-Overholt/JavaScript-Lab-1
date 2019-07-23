const name = "Henry Overholt";
const age = "26";
const birthday = "April 2nd";
const detroitGC = true;
let lifeEvents = [
  "I was born in Lebanon, Pennsylvania",
  "I moved to Detroit in 2016",
  "I have a brother and a sister",
  "I have broken four bones in my body"
];
if (detroitGC === true) {
  console.log(
    `My name is ${name}, and ${age} years ago on ${birthday} I was born!`
  );
} else {
  console.log(
    `My name is ${name}, and ${age} years ago on ${birthday} I was hatched in a lab for the express purpose to learn how to code this exact message!`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let randomNumber = Math.floor(Math.random() * 9 + 1);
let counter = 0;

while (true) {
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !==5`);
    randomNumber = Math.floor(Math.random() * 9 + 1);
    counter++;
  } else if (randomNumber === 5) {
    counter++;
    console.log(
      `5===5 It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
