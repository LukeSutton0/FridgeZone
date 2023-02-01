require("dotenv").config({ path: "./config.env" });

const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const app = express(); //starts app

//const cors = require("cors");

//middleware
app.use(express.json());
// app.use(cors());


//connect to db
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,() =>{
            console.log('listening on port',process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

app.use('/home/stock',require("./routes/aRoute.js"));


// // get driver connection
// const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });