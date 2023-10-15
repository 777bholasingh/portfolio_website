 const mongoose=require("mongoose")
  const connectDB = () => {
   mongoose
     .connect(process.env.MONGO_URL,{
  dbName:"users_msg",
    
    })
     .then((c) => console.log(`Database Connected with ${c.connection.host}`))
     .catch((e) => console.log(e));
 };

 module.exports={connectDB};










// db.js
// const mongoose = require('mongoose');


// const uri = 'mongodb+srv://lux:g1RDlFB1sAuCN8ry@cluster0.umgh9a2.mongodb.net/lux?retryWrites=true&w=majority'; // Replace with your MongoDB Atlas connection string

// mongoose.connect(uri);

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB database');
// });

// module.exports = db;
