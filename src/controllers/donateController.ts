//import modules
import { donateServices } from '../services/donateService'
import { Request, Response } from 'express'
import {DonateschemaValidate} from '../models/donate'
// import {User} from '../models/userModel'


class donateController {
    //add user controller
    addDonor = async (req: Request, res: Response) => {
        //data to be saved in database
        const data = {
            // id: req.body.id,
            Fname: req.body.Fname,
            Lname: req.body.Lname,
            Email: req.body.Email,
            Phone: req.body.Phone,
            HDYHA: req.body.HDYHA,
            Comment:req.body.Comment

        }
        //validating the request
        const {error, value} = DonateschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create donor function in the service and pass the data from the request
            const donor = await donateServices.createDonor(value)
            res.status(201).send(donor)          
        }
        
    }

    //get all donors
    getDonors = async (req: Request, res: Response) => {
        const donors = await donateServices.getDonors()
        res.send(donors)
    }


    //get a single user
    getADonor = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const donor = await donateServices.getDonor(id)
        res.send(donor)
    }

    //update donor
    updateDonor = async (req: Request, res: Response) => {
        const id = req.params.id
       const donor = await donateServices.updateDonor(id, req.body)  
        res.send(donor)
    }


    //delete a donor
    deleteDonor = async (req: Request, res: Response) => {
        const id = req.params.id
        await donateServices.deleteDonor(id)
        res.send('Donor deleted')
    }

}

//export class
export const DonateController = new donateController()