//import module
import { Host } from '../models/host'
export class hostService {
    //create a host
    async createHost(data: any) {
        try {
            const newHost = await Host.create(data)
            return newHost

        } catch (error) {
            console.log(error)
        }
    }

    //get all hosts
    async getHosts() {
        try {
            const hosts = await Host.find({})
            return hosts

        } catch (error) {
            console.log(error)
        }
    }

    //get a single post
    async getHost(id: string) {
      
        try {
            const host = await Host.findById({_id:id})
            if (!host) {
                return 'host not available'
            }
            return host

        } catch (error) {
            console.log(error)
        }
    }

    //update a host
    async updateHost(id: string, data: any) {
        try {
                //pass the id of the object you want to update
                //data is for the new body you are updating the old one with
                //new:true, so the dats being returned, is the update one
                const hosts = await Host.findByIdAndUpdate({_id:id}, data, {new: true})                
                if(!hosts){
                    return "host not available"
                }
                return hosts          
        } catch (error) {
            console.log(error)
        }
    }

    //delete a host by using the find by id and delete 
    async deleteHost(id: string) {
        try {
            const host = await Host.findByIdAndDelete(id)
            if (!host) {
                return 'host not available'
            }
        } catch (error) {
            console.log(error)
        }
    }
}

//export the class
export const hostServices = new hostService()
