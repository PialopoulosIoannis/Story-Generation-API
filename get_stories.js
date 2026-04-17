const express=require("express");
//const ollama = require('ollama').default;
//const Joi= require('joi');
//const cors = require('cors');
//const app=express();
const router = express.Router();
const supabase = require('./supabase');

//app.use(express.json());
//app.use(cors()); 

stories = [];

router.get("/", async (req, res) => {
    try{
        const {data,error} = await supabase.from("Stories").select("*").
        order("id", {ascending:false}).select();
        if(error) throw error; 
        res.json(data);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Could not retrieve stories." });
    }
    
});

module.exports = router;