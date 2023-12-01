//import modules
import { hostServices } from '../services/hostService'
import { Request, Response } from 'express'
import {HostschemaValidate} from '../models/host'
import { fileURLToPath } from 'url';
const multer = require('multer');




class hostController {
    //add host controller
    addHost = async (req: Request, res: Response) => {
        //data to be saved in database
        const fileName = fileURLToPath.name
        const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

        const data = {
            // id: req.body.id,
            Fname: req.body.Fname,
            Lname: req.body.Lname,
            Email: req.body.Email,
            LinkedinURL:req.body.LinkedinURL,
            CV:req.body.cv,
            Phone:req.body.Phone,
            Date:req.body.Date,
            Headshot:`${basePath}${fileName}`,
            Bio:req.body.Bio,
            PromoteOurshow:req.body.PromoteOurshow,
        }
        //validating the request
        const {error, value} = HostschemaValidate.validate(data)

        if(error){
            res.send(error.message)

        }else{
            //call the create post function in the service and pass the data from the request
            const host = await hostServices.createHost(value)
            res.status(201).send(host)          
        }
        
    }

    //get all hosts
    getHosts = async (req: Request, res: Response) => {
        const hosts = await hostServices.getHosts()
        res.send(hosts)
    }


    //get a single host
    getAHost = async (req: Request, res: Response) => {
        //get id from the parameter
        const id = req.params.id
        const host = await hostServices.getHost(id)
        res.send(host)
    }

    //update host
    updateHost = async (req: Request, res: Response) => {
        const id = req.params.id
       const host = await hostServices.updateHost(id, req.body)  
        res.send(host)
    }


    //delete a host
    deleteHost = async (req: Request, res: Response) => {
        const id = req.params.id
        await hostServices.deleteHost(id)
        res.send('host deleted')
    }

}

//export class
export const HostController = new hostController()