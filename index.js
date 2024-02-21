import express from "express";

const port = 8080;
const app = express();

// app.get("/", (request, response) => {
//     response.send("hello server deer huselt tani irlee")
// })

// app.get("/name", (request, response) => {
//     response.json({name: "zula"})
// })

// app.listen(port, ()=>{
//     console.log(`ene port deer server  aslaa http://localhost:${port}`);
// })
// "nodeas": "npx nodemon index.js"npx 


const arr = [
  { name: "zula", age: "30", lastName: "hel", id: 1 },
];

app.get("/", (req, res) => {
    res.send(arr);
});

app.post("/", (req, res) => {
    res.send(arr.push({name:"duluu", id:2}));
});

// app.delete("/", (req,res) => {
//     res.send(arr.push(arr.filter((el) => el.id!==1)));
// })

app.delete("/", (req,res) => {

    for (i=0; i<arr.length; i++){
        if(arr[i] == 1) {
            arr.splice(i,1)
        }
    }
    res.send(arr)
})
