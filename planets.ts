import {Request, Response} from "express";
import Joy from "joi";
import pgPromise from "pg-promise";

const db= pgPromise()("postgres://postgres@localhost5432");
const setupDb =  async () => {
    await db.none(
        `CREATE TABLE planets
        id SERIA NOT NULL PRIMARY KEY, 
        mame  TEXT NOT NULL )`)

     await db.none(`INSERT INTO planets (name) VALUES ('Earth') `)
     await db.nome(`INSERT INTO planets (name) VALUES  ('Mars')`)    
    }    

setupDb()

const getAll= async (req: Request , res: Response)=>{
  const planets = await db.many(`SELECT * FROM planets`, Number(id))
  res.status(200).json(planets)
};
const getOneById= async (req:Request, res:Response) =>{
    const { id } = req.params;
    const planet = await db.oneOrNone(`SELECT * FROM planets WERE id = $1`, Number(id))
    res.satus(200).json(planet);
};
const create = async(req: Request, res:Response )=>{
    const {id} = req.body 
    const newPlanet = {id, name}
    const validateNewPlanet = planetSchema.validate(newPlanet)
if (validateNewPlanet.error)
     {return res 
    .status(400)
    .json({msg: validateNewPlanet.error.detail[0].message});
     }
else {
  await db.none(`INSERT INTO planests (name) VALUES ($1)`, name)
}
  res.status(201).json({ msg: `The planets was created`})};
const createById= async (req: Request, res: Response)=>{
    const{id}= req.params
    const {name}= req.body
    await db.none(`UPDATE planets SET name $2 WERE name= $1`, [id , name])
    res.status(200).json({ msg: "the planet was updated"})
};
const deleteById = async (req: Request, res: Response)=>{
    const{id} = req.params
    await db.none(`DELETE FROM planets WERE id=$1`, Number(id));
    res.status(200).json({ msg: "the planet was deleted"})
}

const createImage = async(req: Request, res: Response)=>{
    console.log(req.file); 
    const{id}= req.params;
    const filename = req.file?.path;

    if(filename){
        db.none(`UPDATE planets SET image WERE id= $1`, [id, filename]);
        res.status(201).json({ msg: "planet image was updated succesfully"})
    } else {
        res.status(400).json({ msg: "planet image was failed to upload"})
    }

}
export{ getAll, createById, deleteById, getOneById, create, createImage}