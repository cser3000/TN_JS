
array = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
function moveZero (array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            array.splice(i, 1);
            array.push(0);
        }
    }
}

alert(array);

moveZero(array);

alert(array);
