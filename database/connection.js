import mysql from "mysql2/promise";
import { CREATE_SCHOOL_TABLE_QUERY } from "./queries.js";

//======================================
//         create connection
//======================================
const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1167",
  database: "school",
  port: 3306,
});

console.log("connection to db established.")

//=====================================
//         create the tables
//=====================================
await connection.query("DROP TABLE students");
await connection.query(CREATE_SCHOOL_TABLE_QUERY);


export default connection;
