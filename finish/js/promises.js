const promise = new Promise((resolve, reject) => {
  // Asynchronous Code
  setTimeout(() => {
    // Getting data from database
    const student = { id: 1, name: "Bob" };
    resolve(student);
    //reject(new Error("Student not found"));
  }, 2000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
