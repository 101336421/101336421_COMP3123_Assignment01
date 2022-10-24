// Required modules
const express = require('express');
const app = express();
const parser = require('body-parser');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/employeeRoute');
const userRouter = require('./routes/userRoute');
const SERVER_PORT = 3030

// Connection string
const DB_URL = "mongodb+srv://vaibhavguliani1:vaibhavgbc@cluster0.qmkttoh.mongodb.net/assignment_db?retryWrites=true&w=majority"
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connect to MongoDB server.");    
}).catch(error => {
    console.log("Server cannot be connected.", error);
    process.exit();
});


app.use("/api/emp/", employeeRouter)
app.use("/api/user/", userRouter)
app.route("/").get((req, res)=>{
    res.send("<h1>Hello this is Vaibhav Guliani</h1>");
})
    
// Listening to the server
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
