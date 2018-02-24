/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  let arr = [];  
  for (let i = 0; i < preferences.length; i++) {
    let firstSpichonee = preferences[i] - 1;
    let secondSpichonee = preferences[firstSpichonee] - 1;
    let thirdSpichonee = preferences[secondSpichonee] - 1;
    if (firstSpichonee != i && secondSpichonee != i && thirdSpichonee === i) {
      let sum = firstSpichonee + secondSpichonee + thirdSpichonee;
      if(!arr.includes(sum)) {
        arr.push(sum);
        counter++;
      } 
    }  
  }
  return counter;
}
