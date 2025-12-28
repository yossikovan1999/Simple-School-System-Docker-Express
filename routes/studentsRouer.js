import express from "express";
import * as studentsService from "../services/studentService.js";

const router = express.Router();

/**
 * add a student.
 */
router.post("/", async (req, res, next)=>{
    
    try{
        const {name, age, className} = req.body;
        console.log(name, age, className);
        const result = await studentsService.addStudent(name, age, className);
        return res.status(201).json({addedStudent : result});
    }catch(error){
        next(error);
    }
})

/**
 * get all students.
 */
router.get("/", async (req, res, next)=>{
    
    try{        
        const result = await studentsService.getAllStudents();
        return res.status(201).json({students : result});
    }catch(error){
        next(error)
    }
})

/**
 * get student by id.
 */
router.get("/:id", async (req, res, next)=>{
    
    try{        
        const {id} = req.params;
        const result = await studentsService.getStudentById(id);
        return res.status(201).json({students : result});
    }catch(error){
        next(error);
    }
})

/**
 * update a student.
 */
router.put("/:id", async (req,res, next)=>{
    
    try{        
        const {id} = req.params;
        const {name, age, className} = req.body;
        const result = await studentsService.updateStudent(id, name, age, className);
        return res.status(201).json({students : result});
    }catch(error){
        next(error);
    }
})




export default router;

