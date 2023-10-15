const express=require("express");
const { send_email_Controller } = require("../controllers/control_function");

    


  const router=express.Router();

 router.post("/sendemail",send_email_Controller);
 module.exports=router;

