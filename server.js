import dbConnection from "./database/connection.js"; 
import app from "./app.js";

const PORT = 3000;

app.listen(PORT, (err) => {
  console.log(`server running http://localhost:${PORT}`);
});
