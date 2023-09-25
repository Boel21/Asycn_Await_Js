// // Callback hell
// console.log("First-line");
// getStudent(1, (student) => {
//     console.log("Student", student);
//     getSubjects(student.id, (subjects) => {
//         console.log(subjects);
//         getMarks(subjects[0], (mark) => {
//             console.log(mark);
//         });
//     });
// });
// console.log("Last-line");

// // Promise
// const promise = getStudent(1);

// promise
//     .then((student) => getSubjects(student.id))
//     .then((subjects) => getMarks(subjects[0]))
//     .then((mark) => console.log(mark))
//     .catch(error => console.log(error));

// Async await

async function displayData() {
    try {
        const student = await getStudent(1);
        const subjects = await getSubjects(student.id);
        const mark = await getMarks(subjects[0]);
        console.log("Mark", mark);
    } catch (error) {
        console.log(error);
    }
}

displayData();

function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting data from Database");
            resolve({ name: "Bob", id: id });
        }, 2000);
    });
}

function getSubjects(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting subject of student", id);
            resolve(["Maths", "Science", "Computer"]);
        }, 2000);
    });
}

function getMarks(subject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting marks of", subject);
            resolve(80);
        }, 2000);
    });
}
