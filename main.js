const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

let arrayOfBoysNames = ["Саша","Игорь","Алексей"];
let arrayOfGirlsNames = ["Лена","Ира","Светлана"];

function getPairs(students) {
    let rezult = [], pair, boy, girl;
    for (let j = 0; j < Math.floor(students.length / 2); j++) {
        pair = [];
        boy = students[students.indexOf(arrayOfBoysNames[j])];
        girl = students[students.indexOf(arrayOfGirlsNames[j])];
        pair.push(boy,girl);
        rezult.push(pair);
        }
    return rezult;
    }


function getProjectsWithPairs(pairs, themes){
    let str, rezult = [], pair;

    for (let i = 0;i<pairs.length;i++){
        pair = [];
        str = '';
        str = `${pairs[i][0]} и ${pairs[i][1]}`;
        pair.push(str);
        pair.push(themes[i]);
        rezult.push(pair);
    }
    return rezult;
}


function setMarks(students, marks) {
    let rezult = [],setted ;
    for(let i = 0;i<students.length;i++){
        setted = [];
        setted.push(students[i],marks[i]);
        rezult.push(setted);
    }
    return rezult;
}




function setMarksToProjects(settedProjectToPairs) {
    let rezult = [], mark , settedMark, arrayCopy;
    for(let i = 0;i < settedProjectToPairs.length;i++) {
        arrayCopy = [];
        mark = 1 + Math.round(Math.random() * 4);
        arrayCopy.push(settedProjectToPairs[i][0],settedProjectToPairs[i][1]);
        arrayCopy.push(mark);
        rezult.push(arrayCopy);
    }
    return rezult;
}
console.log('Такі пари получились: ');
let pairs = getPairs(students);
console.log(pairs);

console.log('Кожній парі надано проект: ');
let settedProjectToPairs = getProjectsWithPairs(pairs,themes);
console.log(settedProjectToPairs);

console.log('Кожному студенту виставлено оцінку: ');
let settedMarks = setMarks(students,marks);
console.log(settedMarks);

console.log('Кожному проекту виставлено оцінку: ');
let settedMarksToProject = setMarksToProjects(settedProjectToPairs);
console.log(settedMarksToProject);