//import module
import { Donor, } from '../models/donate'
export class donateService {
    //create a Donor
    async createDonor(data: any) {
        try {
            const newDonor = await Donor.create(data)
            return newDonor

        } catch (error) {
            console.log(error)
        }
    }

    //get all Donors
    async getDonors() {
        try {
            const donors = await Donor.find({})
            return donors

        } catch (error) {
            console.log(error)
        }
    }

    //get a single post
    async getDonor(id: string) {
      
        try {
            const donor = await Donor.findById({_id:id})
            if (!donor) {
                return 'donor not available'
            }
            return donor

        } catch (error) {
            console.log(error)
        }
    }

    //update a donor
    async updateDonor(id: string, data: any) {
        try {
                //pass the id of the object you want to update
                //data is for the new body you are updating the old one with
                //new:true, so the dats being returned, is the update one
                const donors = await Donor.findByIdAndUpdate({_id:id}, data, {new: true})                
                if(!donors){
                    return "donor not available"
                }
                return donors          
        } catch (error) {
            console.log(error)
        }
    }

    //delete a donor by using the find by id and delete 
    async deleteDonor(id: string) {
        try {
            const donor = await Donor.findByIdAndDelete(id)
            if (!donor) {
                return 'donor not available'
            }
        } catch (error) {
            console.log(error)
        }
    }
}

//export the class
export const donateServices = new donateService()
