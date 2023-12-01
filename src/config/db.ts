const mongoose  = require('mongoose')  


const connectDB = async () => {

    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true});

       // const conn = await mongoose.connect('mongodb+srv://Kachi:kachi123@crud-api-ts.9zx2uy8.mongodb.net/?retryWrites=true&w=majority');


        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch (error){
        console.log(error)
        process.exit(1)

    }
} 
module.exports = connectDB







