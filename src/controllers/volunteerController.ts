//import modules
import { volunteerServices } from '../services/volunteer'
import { Request, Response } from 'express'
import {VolunteerschemaValidate} from '../models/volunteer'

class volunteerController {
    //add volunteer controller
    addvolunteer = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published
        }
        //validating the request 
        const {error, value} = VolunteerschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create post function in the service and pass the data from the request
            const volunteer = await volunteerServices.createVolunteer(value)
            res.status(201).send(volunteer)          
        }
        
    }

    //get all volunteers
    getVolunteers = async (req: Request, res: Response) => {
        const volunteers = await volunteerServices.getVolunteers()
        res.send(volunteers)
    }


    //get a single volunteer
    getAVolunteer = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const volunteer = await volunteerServices.getVolunteer(id)
        res.send(volunteer)
    }

    //update volunteer
    updateVolunteer = async (req: Request, res: Response) => {
        const id = req.params.id
       const volunteer = await volunteerServices.updateVolunteer(id, req.body)  
        res.send(volunteer)
    }


    //delete a volunteer
    deleteVolunteer = async (req: Request, res: Response) => {
        const id = req.params.id
        await volunteerServices.deleteVolunteer(id)
        res.send('volunteer deleted')
    }

}

//export class
export const VolunteerController = new volunteerController()