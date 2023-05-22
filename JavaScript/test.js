import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'20011004',
    database:'music'
})

conn.connection()

let sql = 'select * from music'

conn.query(sql,(err,result) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(result)
})