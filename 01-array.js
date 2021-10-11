// No.01
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    var ret = new Array;
    for(var i = arr.length-1; i >= 0; i--) {
        ret.push(arr[i]);
    }
    return ret;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//No.02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAvg(arr) {
    let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function getGreaterThanAverage(arr) {
    let avg = getAvg(arr);
    let numbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > avg) {
        numbers.push(arr[i]);
      }
    }
    return numbers;
}

const getAverage1 = getGreaterThanAverage(arr1).length
const getAverage2 = getGreaterThanAverage(arr2).length

console.log(getAverage1)
console.log(getAverage2)

//No.03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function convertArray(arr) {
    let newArr = [];
    for(var i = 0; i < arr.length; i++) {
      newArr = newArr.concat(arr[i]);
    } return newArr
    // console.log(newArr);
  }

function searchInArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      var index = i
      var value = true
    }
  }
  if (value) {
    return index
  } else {
    return null
  }
}

const newArr = convertArray(arr);
console.log(newArr);

console.log(searchInArray(newArr, 3));
console.log(searchInArray(newArr, 2));
console.log(searchInArray(newArr, 4));
console.log(searchInArray(newArr, 8));
