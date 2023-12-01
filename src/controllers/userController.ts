//import modules
import { userServices } from '../services/userService'
import { Request, Response } from 'express'
import {UserschemaValidate} from '../models/userModel'
// import {User} from '../models/userModel'


class userController {
    //add user controller
    adduser = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            // id: req.body.id,
            Fname: req.body.Fname,
            Lname: req.body.Lname,
            Email: req.body.Email,
            Phone: req.body.Phone

        }
        //validating the request
        const {error, value} = UserschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create post function in the service and pass the data from the request
            const user = await userServices.createUser(value)
            res.status(201).send(user)          
        }
        
    }

    //get all users
    getUsers = async (req: Request, res: Response) => {
        const users = await userServices.getUsers()
        res.send(users)
    }


    //get a single user
    getAUser = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const user = await userServices.getUser(id)
        res.send(user)
    }

    //update user
    updateUser = async (req: Request, res: Response) => {
        const id = req.params.id
       const user = await userServices.updateUser(id, req.body)  
        res.send(user)
    }


    //delete a user
    deleteUser = async (req: Request, res: Response) => {
        const id = req.params.id
        await userServices.deleteUser(id)
        res.send('user deleted')
    }

}

//export class
export const UserController = new userController()