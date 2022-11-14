import {createConnection}  from "mysql2/promise";
import {createPool}  from "mysql2/promise";
import {USER_DB,HOST_DB,DATABASE,PASS_DB,PORT_DB}  from "./config.js";
//import {USER_DB,HOST_DB,DATABASE,PASS_DB,PORT_DB}  from "./config2.js";

/*createConnection({
    user: 'bsale_test',
    password:'bsale_test',
    host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    //port:3306,
    database:'bsale_test'
})*/

/*export const conn= await createConnection({
    user: 'root',
    password:'narualex',
    host:'localhost',
    port:3306,
    database:'usuariodb'
})*/

/*
export const pool= createPool({
    user: 'root',
    password:'narualex',
    host:'localhost',
    port:3306,
    database:'usuariodb'
})
*/


export const pool= createPool({
    user: USER_DB,
    password:PASS_DB,
    host:HOST_DB,
    port:PORT_DB,
    database:DATABASE
})

