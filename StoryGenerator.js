const express=require("express");
const ollama = require('ollama').default;
const Joi= require('joi');
const cors = require('cors');
//const app=express();
const router = express.Router();
const supabase = require('./supabase');

//app.use(express.json());
//app.use(cors()); 





router.post("/", async (req,res)=>{

    const theme=req.body.theme;
    const goal=req.body.goal;
    const who_talking=req.body.who_talking;
    const age=req.body.age;
    const duration=req.body.duration;


    const prompt = `I want you to write a story about kids who are ${age} years old.
    The story should be about ${theme} and should teach/its goal is : ${goal}.
    The story will be told by ${who_talking} to the ${age} years old kids.
    The story should be approximately ${duration} minutes long.
    Follow these strict rules:
    - The story must be engaging and suitable for ${age} years old kids.`; 

    try {
        
        const response = await ollama.generate({
            model: 'StoryTeller_llama3.2:3b', 
            prompt: prompt,
            //format: 'json',
            stream: false 
        } );
    


       const cleanResponse = response.response.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
        const answer = JSON.parse(cleanResponse);

        
        const title = answer.title;
        const story = answer.story;
        const message = answer.message;

        const { data, error } = await supabase
        .from('Stories') 
        .insert([
            { 
                Title: title, 
                Story: story, 
                Age: age 
            }
        ]).select();

        if(error) throw error;

        const resultForFrontend = {
            title: title,
            content: story,
            moral: message,
            ageGroup: req.body.age
        };

 
        res.json(resultForFrontend);

    } catch (error) {
    console.error("DEBUG ERROR:", error.message); 
    
    res.status(500).json({ 
        error: "The AI is feeling shy today.",
        details: error.message 
    });
} 

});

module.exports = router;    


