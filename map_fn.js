function map(arr, cb) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(cb(arr[i]));
    }
    return newArray;
  }


const originalArr = [1, 2, 3, 4];
const mappedArr = map(originalArr, (i) => i * 2);
console.log(originalArr); // Output: [1, 2, 3, 4]
console.log(mappedArr); // Output: [2, 4, 6, 8]
