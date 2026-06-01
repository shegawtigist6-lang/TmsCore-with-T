import { Temporal } from "@js-temporal/polyfill";
import { Student, parseStudent } from "./models/student.model";

// --- Exercise 2 ሙከራዎች ---
const student: Student = {
  id: "STU-001",
  name: "Hana Tadesse",
  enrollmentDate: Temporal.Now.instant(),
};
//student.id = "STU-999"; 
console.log(student.gpa?.toFixed(2)); 

console.log(student.gpa?.toFixed(2) ?? "Not yet graded");


// --- Exercise 3 Part B ሙከራዎች ---
console.log(parseStudent({ id: "STU-001", name: "Hana" }));
// Prints a valid Student object

parseStudent({ id: 42, name: "Test" });
// Throws: TypeError: Expected id to be a string, received number