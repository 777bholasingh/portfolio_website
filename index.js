
 const express=require("express")
 const cors=require("cors")
 const dotenv=require("dotenv")
 //const path=require("path")
 const {connectDB}= require("./controllers/connect_db");



  dotenv.config();

 const app=express();
 
  const port=process.env.PORT;
 
  connectDB();


  app.use(cors());
  app.use(express.json());

  //accessing static files
  //app.use(express.static(path.join(__dirname, "./client-side/build")));

   app.use("/api/users",require("./server_routes/routes"));

  // app.get("*", function (req, res) {
  //    res.sendFile(path.join(__dirname, "./client-side/build/index.html"));
    //});
    
 


  app.listen(port,()=>{

        console.log(`server is running in ${port}`)
  })


