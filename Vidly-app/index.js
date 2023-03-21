const Joi = require('joi');
const express = require('express');
const app = new express();

app.use(express.json());

var genres = [
    {"movie":"movie1","genre":"action"},
    {"movie":"movie2","genre":"horror"},
    {"movie":"movie3","genre":"comedy"}
]

app.get("/api/genre",(req,res) => {
    res.send(genres);
});

app.get("/api/genre/:movie",(req,res) => {
   const elem =  genres.find((element) => 
    element.movie === String(req.params.movie)
   );
   if(!elem) res.status(404).send('invalid genre given');
   res.send(elem);
});

app.post("/api/genre",(req,res) => {
    const schema = Joi.object({
        movie: Joi.string().min(3).required(),
        genre: Joi.string().min(3).required()
    })
    const elem = schema.validate(req.body);
    console.log(elem);
    
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})