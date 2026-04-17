const express=require("express");
//const ollama = require('ollama').default;
//const Joi= require('joi');
//const cors = require('cors');
//const app=express();
const router = express.Router();

//app.use(express.json());
//app.use(cors()); 

stories = [];

router.get("/",(req,res)=>{
    res.send(stories);
})

module.exports = router;