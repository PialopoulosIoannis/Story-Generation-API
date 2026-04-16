const express=require("express");
const ollama = require('ollama').default;
const Joi= require('joi');
const cors = require('cors');
const app=express();

app.use(express.json());
app.use(cors()); 

stories = [];

app.get("/api/getstories",(req,res)=>{
    res.send(stories);
})

app.post("/api/createastoryformykid", async (req,res)=>{

    const theme=req.body.theme;
    const happiness_score=req.body.happiness_score;
    const sadness_score=req.body.sadness_score;
    const age=req.body.age;

    const prompt = `The age is ${age}. 
    e ${happiness_score}/10 happy and
    ${sadness_score}/10 sad.
    The theme of the story is ${theme} `; 

    try {
        // 3. Call Ollama (I'm using 'qwen' since you mentioned it)
        const response = await ollama.generate({
            model: 'storymaker_tinydolphin', 
            prompt: prompt,
            stream: false // This makes it wait until the whole story is done
        } );
    


        // 4. Store the story in a variable and send it back
        const generatedStory = response.response;
        
        created_story= {
            story: generatedStory,
            metadata: { theme, age },
            id: stories.length +1
        };
        stories.push(created_story);

        res.json(generatedStory);

    } catch (error) {
    console.error("DEBUG ERROR:", error.message); 
    
    res.status(500).json({ 
        error: "The AI is feeling shy today.",
        details: error.message 
    });
}; 

});

const port= process.env.PORT || 3000

app.listen(port, ()=> console.log(`Listening on ${port}...`));

