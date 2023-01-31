const express = require('express');
const Student = require('../models/Student')
const { validationResult } = require('express-validator')



const Insert = async (req, res) => {
    try {
        const { name, phone, email, address } = req.body;


        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const success = false;
            return res.status(400).json({ success, errors: errors.array() })
        }

        const student = new Student({
            name, phone, email, address
        })
        const savedStudent = await student.save()
        success = true;
        res.json({ success, savedStudent })

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal some Error occured");
    }
}





const Get_Student = async (req, res) => {
    try {
        const student = await Student.find();
        res.json(student)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("internal some Error occured");
    }
}



const Delete = async (req, res) => {
    try {
        let student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send("Not Found");
        }
        student = await Student.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Student deleted successfully", student: student });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Some Error occured");
    }
}



const Update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const success = false;
        return res.status(400).json({ success, errors: errors.array() })
    }

    const { name, phone, email, address } = req.body;
    try {
        const newStudent = {};
        if (name) { newStudent.name = name };
        if (phone) { newStudent.phone = phone };
        if (email) { newStudent.email = email };
        if (address) { newStudent.address = address };

        let student = await Student.findById(req.params.id);
        if (!student) {
            res.status(404).send("Not Found");
        }

        student = await Student.findByIdAndUpdate(req.params.id, { $set: newStudent }, { new: true })
        const success = true
        res.json({ success, student });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal some Error occured");
    }
}




const Get_Single_Student = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            res.status(404).send("Student Not Found");
        }
        res.json(student)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal some Error occured");
    }
}

module.exports = { Insert, Get_Student, Delete, Update, Get_Single_Student }