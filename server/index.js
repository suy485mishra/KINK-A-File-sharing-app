import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app=express();//initialise express

app.use(cors());//routing se phle cors

app.use('/',router);
const PORT=8000;//choose a port

DBConnection();
//to make server start
app.listen(PORT,()=>{
    console.log(`server is running bhaiyaji on PORT ${PORT}`);
})