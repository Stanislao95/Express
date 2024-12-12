import express from "express"

const app= express()
const port = 3000
app.use(morgan("dev"))
app.use(express.json())


type Planet ={
    id: Number;
    name: String;
}

type Planets = Planet[];

let planets = [
    {id: 1, name: "Earth"},
    {id: 2, mame: "Mars"},]

app.get("/api/planets/:id", (req , res)=>{
    res.status(200).json(planets)
})

app.get("/api/planets/:id", (req, res) =>{
    const { id } = req.params;
    const planet =planets.find(p => p.id=== Number(id))
    res.satus(200).json(planet);
})

app.post("/api/planets" , (req, res )=>{
    const {id} = req.body 
    const newPlanet = {id, name}
    planets = [...planets , newPlanet]
    console.log(planets)
    res.status(201).json({ msg: `The planets was created`})
})

app.listem(port , ()=>{ 
    console.log(`Example app is listenig on port http://localhost:${port}`)
});