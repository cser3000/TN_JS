
let arr = [1, 2, 3, 4, 2, 1, 5, 6, 4, 5];

function uniqueVelues (arr) {
    let arrUniqueVelues = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in arrUniqueVelues)) {
            arrUniqueVelues.push(arr[i]);
        }
    }
    return arrUniqueVelues;
}

let res;

alert(arr);

res = uniqueVelues(arr);

alert(res);