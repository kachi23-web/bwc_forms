const express =require('express')
const router = express.Router()
import { VolunteerController } from '../controllers/volunteerController'



//add post route
router.post('/',VolunteerController.addvolunteer)

//get Volunteers
router.get('/', VolunteerController.getVolunteers)

//get single Volunteer
router.get('/:id', VolunteerController.getAVolunteer)

//update a Volunteer
router.put('/:id', VolunteerController.updateVolunteer)

//delete a Volunteer
router.delete('/:id', VolunteerController.deleteVolunteer)









module.exports = router