const mongoose = require('mongoose')

import  {Schema, model,} from 'mongoose'
import { URL } from 'url';
const  Joi = require('joi');

//validation schema
export const HostschemaValidate = Joi.object({
    
    Fname: Joi.string().required(),
    Lname: Joi.string().required(),
    Email: Joi.string().required(),
    LinkedinURL: Joi.any().required(),
    CV: Joi.any().required(),
    Phone: Joi.number(),
    Date: Joi.date().required(),
    Headshot: Joi.any(),
    Bio: Joi.string().required(),
    PromoteOurshow: Joi.string().required(),

})

//creating an interface 
interface IHosts {
    Fname: string,
    Lname: string,
    Email: string,
    LinkedinURL:URL,
    CV:string,
    Phone:number,
    Date:Date,
    Headshot:ImageBitmap,
    Bio:string,
    PromoteOurshow:string


}

//Hostschema
const hostSchema = new Schema<IHosts>({

    Fname: {
        type: String,
        required: true
    },

    Lname: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        
    },
    LinkedinURL: {
        type: String,
        required: true,
        
    },
    CV: {
        type: String,
        required: true,
        
    },
    Phone: {
        type: Number,
        required: false,
        
    },
    
    Date: {
        type: Date,
        required: true,
        
    },
    Headshot: {
        type: String,
        required: true,
        
    },
    Bio: {
        type: String,
        required: true,
        
    },
    PromoteOurshow: {
        type: String,
        required: true,
        
    },
    
    
})

//creating a model
 export const Host = model<IHosts>('Host', hostSchema )