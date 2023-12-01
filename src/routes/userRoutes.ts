const express =require('express')
export const router = express.Router()
const {registerUser, loginUser, getMe
} = require('../controllers/userController')
import { UserController } from '../controllers/userController'

// const {protect} =require('../middleware/authMiddleware')


// router.post('/',registerUser) 
// router.post('/login',loginUser)
// router.get('/me',protect,getMe) 


//importing modules
// import express from "express";

//initiating the router
// export const router = express.Router()

//add post route
router.post('/',UserController.adduser)

//get Users
router.get('/', UserController.getUsers)

//get single User
router.get('/:id', UserController.getAUser)

//update a User
router.put('/:id', UserController.updateUser)

//delete a User
router.delete('/:id', UserController.deleteUser)



module.exports = router