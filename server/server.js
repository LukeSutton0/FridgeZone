const express = require("express");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

const app = express(); //starts app

//const cors = require("cors");

//middleware
app.use(express.json());
// app.use(cors());



app.listen(process.env.PORT,() =>{
    console.log('listening on port',process.env.PORT)
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