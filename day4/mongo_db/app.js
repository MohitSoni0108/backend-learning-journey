// mongodb+srv://Mohit:Mohit@cluster0.tiumhxm.mongodb.net/?appName=Cluster0
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://Mohit:Mohit@cluster0.tiumhxm.mongodb.net/studentDB")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });

//defining the schema of our database

  const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

//creating a model from that schema 
const Student = mongoose.model("Student",studentSchema);


//creating a new student 
// async function createStudent() {
 
//   await Student.create({
//   name: "Rahul",
//   age: 20,
//   email: "rahul@gmail.com",
// });

// await Student.create({
//   name: "Priya",
//   age: 24,
//   email: "priya@gmail.com",
// });
// }

// createStudent();


// async function StudentInfo()
// {
//    const students = await Student.find();
//    return students; 
// }

// StudentInfo().then((info) => {
//     console.log(info);
//   })

// async function StudentInfo() {
//    const students = await Student.find();
//    console.log(students);
// }

// StudentInfo();

async function AGE20() {
    const students = await Student.find({
  age: 20
});
console.log(students);
}

AGE20();