
const students = [
    { name: 'Alex', mark: '76'},
    { name: 'John', mark: '30'},
    { name: 'Smith', mark: '50'},
    { name: 'Bob', mark: '62'},
    { name: 'Sam', mark: '97'}
]

function goodMarks (students) {
    let goodStud = students.filter( item => Number(item.mark) > 50);
    let goodStudName = '';
    for (let i = 0; i < goodStud.length; i++) goodStudName = goodStudName + goodStud[i].name + ', ';
    return goodStudName;
}

alert(goodMarks(students));
