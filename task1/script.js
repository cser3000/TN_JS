
let arr = [1, 2, 3, 4, 2, 1, 5, 6, 4, 5];

function uniqueValues (arr) {
    let arrUniqueValues = new Set();
    for (let i = 0; i < arr.length; i++) {
        arrUniqueValues.add(arr[i]);
    }
    return arrUniqueValues;
}

alert(arr);

for (let value of uniqueValues(arr)) alert(value);


