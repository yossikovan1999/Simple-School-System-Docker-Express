//========================================
//        table creation queries
//========================================
export const CREATE_SCHOOL_TABLE_QUERY = `
CREATE TABLE IF NOT EXISTS students(
id INT AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
age INT NOT NULL,
class_name VARCHAR(20) NOT NULL,
PRIMARY KEY(id)
);`


//========================================
//              queries
//========================================
export const ADD_STUDENT_QUERY = `
INSERT INTO students (name, age, class_name)
VALUES (?,?,?);`


export const SELECT_ALL_STUDENTS = `
SELECT * FROM students
`

export const GET_STUDENT_BY_ID = `
SELECT * FROM students WHERE id = ?
`

export const UPDATE_STUDENT_BY_ID = `
UPDATE students
set name = ?, age = ?, class_name = ?
WHERE id = ?
`