const express=require("express");
const cors = require('cors');
const app=express();
const StoryGenerator = require("./StoryGenerator"); 
const GetStories = require("./get_stories");

app.use(express.json());
app.use(cors());

app.use('/api/storygenerator', StoryGenerator); 
app.use('/api/getstories', GetStories);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}...`));