import connection from "../database/connection.js";
import * as queries from "../database/queries.js";
import HttpError from "../errors/httpError.js";

/**
 * add a student to the db.
 * @param {*} name
 * @param {*} age
 * @param {*} className
 * @returns
 */
export async function addStudent(name, age, className) {
  //insert the data into the db
  const [returnedData] = await connection.query(queries.ADD_STUDENT_QUERY, [name, age, className]);
  console.log("STUDENT INSERTED:", returnedData);
   
  const student = await getStudentById(returnedData.insertId);
  
  return student;
}

/**
 * get all students from the db.
 * @returns
 */
export async function getAllStudents() {
  const [students] = await connection.query(queries.SELECT_ALL_STUDENTS);
   
  if(students.length === 0){
    throw new HttpError("student not found!", 404)
  }

  return students;
}

/**
 * get student by id.
 * @param {*} id 
 * @returns 
 */
export async function getStudentById(id){
 
  const [students] = await connection.query(queries.GET_STUDENT_BY_ID, [id]);
  
  if(students.length === 0){
    throw new HttpError("student not found!", 404)
  }
  
  return students[0];

}

/**
 * update a student by the student name.
 * @param {*} id 
 * @param {*} name 
 * @param {*} age 
 * @param {*} className 
 */
export async function updateStudent(id, name, age, className){

  if(!name || !age || !className){
    throw new HttpError("must pass a name age and class name.", 400);
  }

  await connection.query(queries.UPDATE_STUDENT_BY_ID, [name, age, className, id]);
  const student = await getStudentById(id);

  return student;
}

