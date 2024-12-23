import {Request, Response} from "express"

type Planet ={
    id: Number;
    name: String;
}

type Planets = Planet[];

let planets: Planets = [
    {id: 1, name: "Earth"},
    {id: 2, name : "Mars"},
];

const getAll= (req: Request , res: Response)=>{
    res.status(200).json(planets)
};
const getOneById=  (req:Request, res:Response) =>{
    const { id } = req.params;
    const planet =planets.find(p => p.id=== Number(id))
    res.satus(200).json(planet);
};
const create= (req: Request, res:Response )=>{
    const {id} = req.body 
    const newPlanet = {id, name}
    planets = [...planets , newPlanet]
    console.log(planets)
    res.status(201).json({ msg: `The planets was created`})};
const createById=  (req: Request, res: Response)=>{
    const{id}= req.params
    const {name}= req.body
    planets= planets.map(p=> p.id===Number(id) ? ({ ...p, name}) :p)
    console.log(planets);
    res.status(200).json({ msg: "the planet was updated"})
};
const deleteById = (req: Request, res: Response)=>{
    const{id} = req.params
    planets = planets.filter(p=> p.id!==Number(id))
    res.status(200).json({ msg: "the planet was deleted"})
}
export{ getAll, createById, deleteById, getOneById, create}