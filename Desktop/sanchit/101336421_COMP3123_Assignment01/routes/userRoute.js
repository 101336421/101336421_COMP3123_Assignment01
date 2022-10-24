const userModel = require('../models/user');
const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');

app.post('/signup', async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201).json({
            created_user: newUser
        });
    } catch (error) {
        res.status(500).json({
            "status": false, 
            "message": error.message
        });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({
        username : username,
        password : password
    });

    if(user.password === password) {
        res.json({"username": user.username, "password": user.password, "message": "User logged in."});
    }
    else {
        res.json('Invalid username or password entered.');
    }
});

module.exports = app;
