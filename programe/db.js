const mongoose = require('mongoose')
require('dotenv').config()
const connectDB= async () =>{
    try {
        await mongoose.connect(process.env.mongo_urel)
        console.log('db connect')
    } catch (error) {
        console.log('db dont coonect')
    }
    
}
module.exports =connectDB