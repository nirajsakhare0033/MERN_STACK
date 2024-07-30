import express from "express";
import  {allStudents, newStd, updateStudent, deleteStudent} from '../Controllers/students.js'
const router = express.Router();
router.get('/all', allStudents)
router.post('/create', newStd)
router.put('/update', updateStudent)
router.delete("/delete", deleteStudent);
export default router;