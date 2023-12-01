//import module
import { Volunteer, } from '../models/volunteer'
export class volunteerService {
    //create a Volunteer
    async createVolunteer(data: any) {
        try {
            const newVolunteer = await Volunteer.create(data)
            return newVolunteer

        } catch (error) {
            console.log(error)
        }
    }

    //get all Volunteers
    async getVolunteers() {
        try {
            const volunteers = await Volunteer.find({})
            return volunteers

        } catch (error) {
            console.log(error)
        }
    }

    //get a single post
    async getVolunteer(id: string) {
      
        try {
            const volunteer = await Volunteer.findById({_id:id})
            if (!volunteer) {
                return 'volunteer not available'
            }
            return volunteer

        } catch (error) {
            console.log(error)
        }
    }

    //update a volunteer
    async updateVolunteer(id: string, data: any) {
        try {
                //pass the id of the object you want to update
                //data is for the new body you are updating the old one with
                //new:true, so the dats being returned, is the update one
                const volunteers = await Volunteer.findByIdAndUpdate({_id:id}, data, {new: true})                
                if(!volunteers){
                    return "volunteer not available"
                }
                return volunteers          
        } catch (error) {
            console.log(error)
        }
    }

    //delete a volunteer by using the find by id and delete 
    async deleteVolunteer(id: string) {
        try {
            const volunteer = await Volunteer.findByIdAndDelete(id)
            if (!volunteer) {
                return 'volunteer not available'
            }
        } catch (error) {
            console.log(error)
        }
    }
}

//export the class
export const volunteerServices = new volunteerService()
