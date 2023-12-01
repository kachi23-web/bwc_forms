"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
// const Goal = require('./models/goalModel')
var colors = require('colors');
var dotenv = require('dotenv').config();
var errorHandler = require('./middleware/errorMiddleware').errorHandler;
var connectDB = require('./config/db');
var required = require('nodemon/lib/config').required;
var port = process.env.PORT || 5000;
// app.use(cors ({
//     credentials: true,
// }));
// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use('/',(req,res) =>{
//        return res.json ('Hello CRUD API Backend!!')
//      });
connectDB();
var app = (0, express_1.default)();
//middleware
app.use(body_parser_1.default.json());
// for error handling
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// http://localhost:5000/api/users
app.use('/api/users', require('./routes/userRoutes'));
//route
// app.get('/api/goals',(req,res) => {
//     res.status(200).json({message:"Get goals"})
// })
app.use(errorHandler);
