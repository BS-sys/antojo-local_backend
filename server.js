const express= require('express');
const dovten=require('dotenv');
const cors= require('cors');

dovten.config();

const app=express();
app.use(cors());
app.use(express.json());

const userRoutes =require('./routers');
app.use('/api/users',userRoutes);

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});