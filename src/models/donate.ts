import  {Schema, model,} from 'mongoose'
const  Joi = require('joi');

//validation schema
export const DonateschemaValidate = Joi.object({
    Fname: Joi.string().required(),
    Lname: Joi.string().required(),
    Email: Joi.string().required(),
    Phone: Joi.number(),
    HDYHA: Joi.string(),
    Comment: Joi.string(),


    


})

//creating an interface 
interface IDonates {
    // id: string,
    Fname: string,
    Lname: string,
    Email: string,
    Phone:number,
    HDYHA:string,
    Comment:string,

}

//Postschema
const donateSchema = new Schema<IDonates>({
    

    Fname: {
        type: String,
        required: [true, "Enter your first name"]
    },

    Lname: {
        type: String,
        required: [true, "Enter your last name"]
    },
    Email: {
        type: String,
        required: [true, "Enter your Email Address"],
        
    },
    Phone: {
        type: Number,
        required: false,
        
    },
    HDYHA: {
        type: String,
        required: [false,  ""],
        
    },
    
    Comment: {
        type: String,
        required: false,
        
    },
    
})

//creating a model
 export const Donor = model<IDonates>('Donate', donateSchema )