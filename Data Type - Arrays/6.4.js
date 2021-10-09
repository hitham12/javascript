const jumArray = [10, 5, 8, 7, -1, 5, 3, 4, 5];
const avgJumper = (arr) => {
  let tempArr = [];
  
  for (let i = 0; i < arr.length; i += 3) { 
    let numberOfValidJumps = 0;
    let sum = 0;
    if (arr[i] !== -1) {
      sum = sum + arr[i];
      numberOfValidJumps += 1;
    }
    if (arr[i + 1] !== -1) {
      sum = sum + arr[i + 1];
      numberOfValidJumps += 1;
    }
    if (arr[i + 2] !== -1) {
      sum = sum + arr[i + 2];
      numberOfValidJumps += 1;
    }
    if (
      sum / numberOfValidJumps === 0 ||
      sum / numberOfValidJumps === null ||
      sum / numberOfValidJumps === undefined ||
      sum / numberOfValidJumps === Infinity ||
      sum / numberOfValidJumps < 0
    ) {
      tempArr.push('vary bad jumper!');
    } else {
      tempArr = [...tempArr , sum / numberOfValidJumps]

    }
  }
​
  return tempArr
};
​

const bestAvgJump = (avjJump) => {
  let bestJump = avjJump[0]
  for(let i=1; i<avjJump.length; i++){
    if (avjJump[i] > bestJump){
      bestJump = avjJump[i]
    }
  }
  return bestJump;
}

console.log(avgJumper(jumArray))
console.log(...avgJumper(jumArray))