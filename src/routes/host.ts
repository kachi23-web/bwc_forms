const express =require('express')
export const router = express.Router()
import { HostController } from '../controllers/hostController'



//add host route
router.post('/',HostController.addHost)

//get Hosts
router.get('/', HostController.getHosts)

//get single Host
router.get('/:id', HostController.getAHost)

//update a Host
router.put('/:id', HostController.updateHost)

//delete a Host
router.delete('/:id', HostController.deleteHost)



module.exports = router