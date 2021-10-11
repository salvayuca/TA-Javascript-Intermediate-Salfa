//No.01
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arrSum) {
    let sum = arrSum[0]
    if (arrSum.length === 1) {
        return sum
    }
    sum += arrSum[1]
    arrSum.shift()
    arrSum[0] = sum
    return sumOfArray(arrSum)
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//No.02
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;

function countAboveAvg(arr, avg) {
    if (arr.length === 1) {
        return arr[0] > avg
    }
    let value = arr.shift()
    return (value > avg) + countAboveAvg(arr,avg)
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

//No.03
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    let value = arr.length
    let index = value - 1
    if(value === 0) {
        return "angka tidak ditemukan"
    } else if (arr[index] === num){
        return "angka ditemukan pada index: " + index
    }
    return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));

//No.04
function trianglePattern(num1, num2) {
    if (num1 == 0) {
        return
    }
    let space = ""
    for (let idx = 0; idx < num2; idx++) {
        if (idx < num1 - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (num2 - num1 + (idx - num1) + 2))
        }
    }
    console.log(space);
    trianglePattern(num1 - 1, num2)
}

trianglePattern(5, 5);