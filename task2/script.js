
function isPrime(a) {
    if ((a % 2 === 0 && a !== 2) || a === 1) {
        return false;
    }
    for (i = 3; i <= a / 2; i += 2) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}

let a = prompt("введите число");

alert(isPrime(+a));