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
  for(let x=0; x<results.length; x++) {
      if (results[x] ==="yes") {
          yescount++
      } else if(results[x] ==="no") {
          nocount++
      } else {
          maybecount++
      }
  }
  
  console.log(yescount, nocount, maybecount);
  
  
let age = [16,23,14,24,19, 18,]
let underage =0;
let overage = 0;
for(let p=0; p<age.length;p++) {
    if (age[p]< 18) {
        underage++;
    } else {
        overage++;
    }
}
console.log(underage,overage)



