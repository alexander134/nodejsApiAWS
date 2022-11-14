import express from "express";
import {  pool} from "./db.js";
import { PORT_DBL,USER_DB,HOST_DB,DATABASE,PASS_DB,PORT_DB}  from "./config.js";
const app = express()

app.get('/', async(req,res)=>{
    console.log("hols /");
    res.send(` RUTA: / </br> USER_DB:${USER_DB} </br> HOST_DB:${HOST_DB}</br> DATABASE:${DATABASE}</br> PASS_DB:${PASS_DB}</br>PORT_DB:${PORT_DB}</br>`)
    //const [result] =await pool.query("SELECT * from product");
    //console.log(result);
    //res.json(result)
})


app.get('/ping', async (req,res)=>{
    //const [result] =await pool.query("select * from usu");
    console.log("hols ping");
    //res.json(result)
    res.send(` RUTA: ping </br> USER_DB:${USER_DB} </br> HOST_DB:${HOST_DB}</br> DATABASE:${DATABASE}</br> PASS_DB:${PASS_DB}</br>PORT_DB:${PORT_DB}</br>`)
})

app.get('/aws', async (req,res)=>{
    //const [result] =await pool.query("SELECT * from product");
    console.log("hols aws");
    //res.json(result)
    res.send(` RUTA: aws </br> USER_DB:${USER_DB} </br> HOST_DB:${HOST_DB}</br> DATABASE:${DATABASE}</br> PASS_DB:${PASS_DB}</br>PORT_DB:${PORT_DB}</br>`)
})


app.get('/crear_usuario', async (req,res)=>{
    const [result] =await pool.query("SELECT * from product");
    //const [result] =await pool.query("insert into usu(name)values('alexander5')");
    console.log(` RUTA: crear_usuario </br> USER_DB:${USER_DB} </br> HOST_DB:${HOST_DB}</br> DATABASE:${DATABASE}</br> PASS_DB:${PASS_DB}</br>PORT_DB:${PORT_DB}</br>`);
    res.json(result)
    //res.send(` RUTA: crear_usuario </br> USER_DB:${USER_DB} </br> HOST_DB:${HOST_DB}</br> DATABASE:${DATABASE}</br> PASS_DB:${PASS_DB}</br>PORT_DB:${PORT_DB}</br>`)
})

app.listen(PORT_DBL)

console.log('Server on port mijo', PORT_DBL)