import express from 'express';

const allStudents = (req, res) => {
  res.send("All students");
}

const newStd = (req, res) =>{
  res.send("Create new user");
}

const updateStudent = (req, res) => {
  res.send("update student");
};
const deleteStudent = (req, res) => {
  res.send("delete student");
};

export {allStudents, newStd, updateStudent, deleteStudent}
