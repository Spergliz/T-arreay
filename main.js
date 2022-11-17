// let results = [
//   "yes",
//   "no",
//   "maybe",
//   "yes",
//   "yes",
//   "no",
//   "maybe",
//   "yes",
//   "yes",
//   "yes",
//   "no",
//   "maybe",
//   "yes",
//   "yes",
//   "no",
//   "maybe",
// ];

// let yesCount = 0;
// let noCount = 0;
// let maybeCount = 0;
// for (let x = 0; x < results.length; x++) {
//   if (results[x] == "yes") {
//     yesCount++;
//   } else if (results[x] == "no") {
//     noCount++;
//   } else {
//     maybeCount++;
//   }
// }

// console.log(yesCount, noCount, maybeCount);

let results = [
  "yes",
  "no",
  "maybe",
  "yes",
  "yes",
  "no",
  "maybe",
  "yes",
  "yes",
  "yes",
  "no",
  "maybe",
  "yes",
  "yes",
  "no",
  "maybe",
];
let yescount = 0;
let nocount = 0;
let maybecount = 0;
for (let x = 0; x < results.length; x++) {
  if (results[x] === "yes") {
    yescount++;
  } else if (results[x] === "no") {
    nocount++;
  } else {
    maybecount++;
  }
}

console.log(yescount, nocount, maybecount);

let age = [16, 23, 14, 24, 19, 18];
let underage = 0;
let overage = 0;
for (let p = 0; p < age.length; p++) {
  if (age[p] < 18) {
    underage++;
  } else {
    overage++;
  }
}
console.log(underage, overage);

let prices = [20, 40, 60, 30, 20, 10, 45, 80];
let under20 = 0;
let around20to49 = 0;
let over50 = 0;
for (let e = 0; e < prices.length; e++) {
  if (prices[e] < 20) {
    under20++;
  } else if (prices[e] > 20) {
    around20to49++;
  } else {
    over50++;
  }
}
console.log(under20, around20to49, over50);

let prices2 = [20, 40, 60, 30, 20, 10, 45, 80];
for (let z = 0; z < prices2.length; z++) {
  prices2[z] += 2;
}
console.log(prices2);

let prices3 = [20, 40, 60, 30, 20, 10, 45, 80];
for (let z = 0; z < prices2.length; z++) {
    let A = prices3[z]*0.05
    prices3[z]+= A;
}
console.log(prices3)

let prices4 = [20, 40, 60, 30, 20, 10, 45, 80];
for (let d = 0; d < prices4.length; d++) {
    let A = prices4[d]*0.2
    prices4[d]-=A
} 
console.log(prices4)