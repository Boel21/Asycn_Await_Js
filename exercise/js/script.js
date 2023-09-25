// Task - Convert getSubjects & getMarks in Promises

// Callback hell
console.log("First-line");
getStudent(1, (student) => {
  console.log("Student", student);
  getSubjects(student.id, (subjects) => {
    console.log(subjects);
    getMarks(subjects[0], (mark) => {
      console.log(mark);
    });
  });
});
getPokemons(1, (pokemon) => {
  console.log(pokemon);
});
console.log("Last-line");

function getStudent(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data from Database");
      resolve({ name: "Bob", id: id });
    }, 2000);
  });
}

function getSubjects(id, callback) {
  setTimeout(() => {
    console.log("Getting subject of student", id);
    callback(["Maths", "Science", "Computer"]);
  }, 2000);
}

function getMarks(subject, callback) {
  setTimeout(() => {
    console.log("Getting marks of", subject);
    callback(80);
  }, 2000);
}

function getPokemons(id, callback) {
  setTimeout(() => {
    console.log("Getting Pokemons from DB", id);
    callback(["Pikachu", "Charmander", "Boel21"]);
  }, 2000);
}
