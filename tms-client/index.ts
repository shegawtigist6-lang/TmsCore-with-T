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

parseStudent({ id:"STU-001", name: "Test" });
// Throws: TypeError: Expected id to be a string, received number
import { AssessmentItem, calculateGrade } from "./models/assessment.model";

const quiz: AssessmentItem = {
  id: "QUIZ-001",
  kind: "quiz",
  title: "SQL Basics",
  correctAnswers: 8,
  totalQuestions: 10,
};

const lab: AssessmentItem = {
  id: "LAB-001",
  kind: "lab",
  title: "REST API Project",
  functionalityScore: 85,
  codeQualityScore: 90,
};

console.log(`Quiz grade: ${calculateGrade(quiz)}%`); // 80
console.log(`Lab grade: ${calculateGrade(lab)}%`); // 87
//quiz.id = "QUIZ-999";