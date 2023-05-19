
const students = [
    { name: 'Alex', mark: '76'},
    { name: 'John', mark: '30'},
    { name: 'Smith', mark: '50'},
    { name: 'Bob', mark: '62'},
    { name: 'Sam', mark: '97'}
]

function goodMarks (students) {
    let goodStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (+students[i].mark > 50) {
            goodStudents.push(students[i].name + ' ');
        }
    }
    return goodStudents;
}

alert(goodMarks(students));