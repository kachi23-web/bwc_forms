const mongoose = require('mongoose')

import  {Schema, model,} from 'mongoose'
import { URL } from 'url';
const Joi =  require('joi');

//validation schema
export const VolunteerschemaValidate = Joi.object({
    Fname: Joi.string().required(),
    Lname: Joi.string().required(),
    Email: Joi.string().required(),
    LinkedinURL: Joi.string(),
    VolunteerPositions:Joi.string().required(),
    OtherVolunteerPositions:Joi.string().required(),
    Cv: Joi.string().required(),
    Bio: Joi.string().required(),
    Phone: Joi.number(),
    Headshot: Joi.string(),
})

//creating an interface 
interface IVolunteers {
    id: string,
    Fname: string,
    Lname: string,
    Email: string,
    LinkedinURL:string,
    VolunteerPositions:string,
    OtherVolunteerPositions:string,
    cv:File,
    Phone:number,
    Headshot:string,
    Bio:string,

}

//Volunteerschema
const volunteerSchema = new Schema<IVolunteers>({
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
    VolunteerPositions: {
        type: String,
        required: true,
        
    },
    OtherVolunteerPositions: {
        type: String,
        required: true,
        
    },
    cv: {
        type: String,
        required: true,
        
    },
    Phone: {
        type: Number,
        required: false,
        
    },
    
   
    Headshot: {
        type: String,
        required: true,
        
    },
    Bio: {
        type: String,
        required: true,
        
    },

    
    
})

//creating a model
 export const Volunteer = model<IVolunteers>('Volunteer', volunteerSchema )