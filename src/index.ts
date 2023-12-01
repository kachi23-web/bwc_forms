import express from 'express';

import http from 'http';
import bodyParser from 'body-parser';
import  multer from 'multer';
import cookieParser from 'cookie-parser';
import compression  from 'compression';
import cors from 'cors';
import {router} from './routes/userRoutes';

// const Goal = require('./models/goalModel')
const colors= require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { required } = require('nodemon/lib/config')
const port = process.env.PORT || 5000





var app = express();
app.use(cors()); // Allows incoming requests from any IP

// Start by creating some disk storage options:

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    // Sets file(s) to be saved in uploads folder in same directory
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
    // Sets saved filename(s) to be original filename(s)
  })
  
// Set saved storage options:
const upload = multer({ storage: storage })

// app.post("/api", upload.array("files"), (req, res) => {
// Sets multer to intercept files named "files" on uploaded form data

     connectDB()
    //  const app = express()
     //middleware
     app.use(bodyParser.json());
     app.use(multer().single('file'));

     // for error handling
     app.use(express.json())
     app.use(express.urlencoded({extended:false }))
     app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

     
     // http://localhost:5000/api/users
     // app.use('/api/users', router)
     app.use('/api/users', require('./routes/userRoutes'))
     app.use('/api/donors', require('./routes/donate'))
     app.use('/api/hosts', require('./routes/host'))
     app.use('/api/volunteers', require('./routes/volunteer'))

     
     app.use(errorHandler)
     app.listen(port, () => console.log(`Server started on port ${port}`))


