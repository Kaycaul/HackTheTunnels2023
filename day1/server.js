//imports
const express = require('express');//require = import -> common JS module syntax, might be different in your template
//import express from 'express';

const app = express();
//middleware
app.use(express.json());//allow us to parse the body
app.use(express.static('public')); // Serve static files from the 'public' directory

//our customers
let customers = {
    1: "Richard",
    2: "Victor",
    3: "Kelly"
}

//GET REQUEST, get what? the home.html
app.get("/", (request,response) => {
    console.log("RECEIVED A GET REQUEST TO \"/\"");
    console.log("Beep boop beep boop");
    response.status(200).sendFile(__dirname + '/public/home.html');
});
//GET
app.get("/customer", (request,response) => {
    console.log("RECEIVED A GET REQUEST TO \"/customer\"");
    console.log("Beep boop beep boop");
    response.status(200).json(customers);
});
//note ":id"
app.get("/customer/:id", (request,response) => {
    console.log("RECEIVED A GET REQUEST TO \"/customer/:id\"");
    console.log("Beep boop beep boop");
    let idWanted = request.params.id;
    response.status(200).json(customers[idWanted]);
});
//POST
app.post("/customer", (request,response) => {
    console.log("RECEIVED A POST REQUEST TO \"/customer\"");
    console.log("Beep boop beep boop");
    console.log(request.body.name);
    customers[4] = request.body.name;
    response.sendStatus(201);
});
//PUT
//no need to return any data back in this case, you can if you want
app.put("/customer/:id", (request,response) => {
    console.log("RECEIVED A PUT REQUEST TO \"/customer/:id\"");
    console.log("Beep boop beep boop");
    let id = request.params.id;
    console.log("ID: " + id);
    console.log("DATA: " + request.body.name);
    customers[id] = request.body.name;
    response.sendStatus(204);
});
//DELETE
//no need to return any data back in this case, you can if you want
app.delete("/customer/:id", (request,response) => {
    console.log("RECEIVED A DELETE REQUEST TO \"/customer/1\"");
    console.log("Beep boop beep boop");
    let id = request.params.id;
    console.log("ID: " + id);
    delete customers[id];
    response.sendStatus(204);
});

app.listen(3000, () => {console.log('server started, listening on port 3000')}); //the port we are listening to