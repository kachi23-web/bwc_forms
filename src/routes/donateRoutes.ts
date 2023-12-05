const express =require('express')
export const router = express.Router()
import { DonateController } from '../controllers/donateController'



//add donor route
router.post('/',DonateController.addDonor)

//get donors
router.get('/', DonateController.getDonors)

//get single Donor
router.get('/:id', DonateController.getADonor)

//update a Donor
router.put('/:id', DonateController.updateDonor)

//delete a Donor
router.delete('/:id', DonateController.deleteDonor)



module.exports = router