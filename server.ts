import express from "express"
import {getAll, createById, deleteById, getOneById, create}, createImange from "./controllers/planets.js";
import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file , cb) =>{
        cb(null, "/uploads")
    }
    filename: (req, file , cb) =>{
        cb(null, file.originalname);
    },
})
const upload = multer({ storage })
const app= express()
const port = 3000

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"))
app.use(morgan("dev"))
app.use(express.json())

app.get("/api/planets/:id",getAll)
app.get("/api/planets/:id",create)
app.post("/api/planets", createById ) 
app.put("/api/planets", getOneById)
app.delete("/api/planets:id", deleteById)
app.post("/api/planets:id/image" ,upload.single("image"), createImange)

app.listem(port , ()=>{ 
    console.log(`Example app is listenig on port http://localhost:${port}`)
});