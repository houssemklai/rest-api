const express = require ('express');
const app = express();
const connectDb = require('./programe/db');
const contactRouter=require('./routes/contact');
connectDb();


app.use(express.json())


app.use('/api/contacts',contactRouter);

const port =  process.env.port ||5000;
app.listen(port,()=>console.log(`port is runing on port ${port}`));