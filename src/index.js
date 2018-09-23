/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0; i < preferences.length; i++) {
    let firstSpichonee = preferences[i];
    let secondSpichonee = preferences[firstSpichonee - 1];
    let thirdSpichonee = preferences[secondSpichonee - 1];
    if (firstSpichonee - 1 !== i && thirdSpichonee -1 === i) counter++;
  }
  return counter / 3;
}
