const mongoose = require('mongoose')

// const userSchema = mongoose.Schema({
//     name: {
//       type: String,
//       required: [true, 'Please add a name']
//     },
//     email: {
//         type: String,
//         required: [true, 'Please add an email'],
//         unique:true
//     },
//     password:{
//         type: String,
//         required: [true, 'Please add a password']
//     }, 
// },
// {
//     timestamps: true

// })

// module.exports = mongoose.model('User',userSchema)



import  {Schema, model,} from 'mongoose'
const  Joi = require('joi');

//validation schema
export const UserschemaValidate = Joi.object({
    // id: Joi.string().required(),
    Fname: Joi.string().required(),
    Lname: Joi.string().required(),
    Email: Joi.string().required(),
    Phone: Joi.number(),


})

//creating an interface 
interface IUsers {
    // id: string,
    Fname: string,
    Lname: string,
    Email: string,
    Phone:number,

}

//Postschema
const userSchema = new Schema<IUsers>({
    // id: {
    //     type: String,
    //     required:true
    // },

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
    Phone: {
        type: Number,
        required: false,
        
    },
    
    
})

//creating a model
 export const User = model<IUsers>('User', userSchema )