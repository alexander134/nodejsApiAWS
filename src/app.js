import express from "express";
import {  pool} from "./db.js";
import { PORT_DBL } from "./config.js";
const app = express()
console.log()

app.get('/', async(req,res)=>{
    //res.send('welcome to server')
    const [result] =await pool.query("SELECT * from product");
    //console.log(result);
    res.json(result)
})


app.get('/ping', async (req,res)=>{
    //const [result] =await pool.query("select * from usu");
    console.log("hols");
    //res.json(result)
    res.send('welcome como estsa')
})

app.get('/aws', async (req,res)=>{
    const [result] =await pool.query("SELECT * from product");
    //console.log(result);
    res.json(result)
})


app.get('/crear_usuario', async (req,res)=>{
    const [result] =await pool.query("SELECT * from product");
    //const [result] =await pool.query("insert into usu(name)values('alexander5')");
    //console.log(result);
    res.json(result[0])
})

app.listen(PORT_DBL)

console.log('Server on port mijo', PORT_DBL)