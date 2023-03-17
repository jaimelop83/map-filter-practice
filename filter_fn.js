function filter(arr, cb) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const arr = [1, 2, 3, 4];
const filteredArr = filter(arr, (i) => i % 2 === 0);
console.log(filteredArr); // Output: [2, 4]
