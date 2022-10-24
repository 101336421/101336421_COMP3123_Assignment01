// Employee Route modules
const employeeModel = require('../models/employee');
const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');

// All the request methods defined:
app.get('/employees', async(req, res) =>{
    const newEmployee = new employeeModel(req.body);
    try{
        await newEmployee.save();
        res.status(200).json(newEmployee);
    }catch(error){
        res.status(400).json(newEmployee);
    }
});

app.post('/employees', async(req, res) =>{
    const newEmployee = new employeeModel(req.body);
    try{
        await newEmployee.save();
        res.status(201).json(newEmployee);
    }catch(error){
        res.status(400).json(newEmployee);
    }
});

app.get('/employees/:empID', async(req, res) =>{
    try{
        res.status(200).json(await employeeModel.findById(req.params.empID, req.body));
    }catch(error){
        res.status(400).json(error);
    }
});
 


app.delete("/employees/:empID", async(req, res) =>{
    try{
        await employeeModel.findByIdAndDelete(req.params.empID);
        res.json("Employee deleted!");
        res.status(204);
    }
    catch(error){
        res.status(400).json("Employee not deleted");
    }
});

app.put("/employees/:empID", async (req, res) => {
    try {
        const updateEmployee = await employeeModel.findByIdAndUpdate(req.params.empID, req.body);
        res.json(updateEmployee);
    } 
    catch (error) {
        if (error.kind === "ObjectId") {
            res.json({ "message": `${req.params.empID} was not found` });
        }
        else {
            res.json({ "message": error.message })
        }
    }
});

module.exports = app
