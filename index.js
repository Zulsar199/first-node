import express from "express";

const port = 8080;
const app = express();

// app.get("/", (request, response) => {
//     response.send("hello server deer huselt tani irlee")
// })

// app.get("/name", (request, response) => {
//     response.json({name: "zula"})
// })

app.listen(port, () => {
    console.log(`ene port deer server  aslaa http://localhost:${port}`);
  });

const arr = [{ name: "zula", age: "30", lastName: "hi", id: 1 }, { name: "gal", age: "20", lastName: "hello", id: 2 }];

app.get("/", (req, res) => {
  res.send(arr);
});

app.post("/", (req, res) => {
  console.log("hello world workin over here");
  arr.push({ name: "duluu", age: "20", lastName: "hello", id: 3 });
  res.send(arr);
});

app.delete("/", (req, res) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      arr.splice(i, 1);
    }
    return arr;
  }
  res.send(arr);
});


// app.delete("/", (req, res) => {
//   // Find the index of the object with id equal to  1
//   const indexToDelete = arr.findIndex(item => item.id ===  1);

//   // If the object is found, remove it from the array
//   if (indexToDelete !== -1) {
//     arr.splice(indexToDelete,  1);
//   }

//   // Send the updated array as a response
//   res.send(arr);
// });