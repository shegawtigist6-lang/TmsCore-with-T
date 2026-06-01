using System;
using TmsCore;

namespace TmsCore
{
    public class EnrollmentService
    {
        public EnrollmentRecord ProcessRegistration(Student? student, Course? course)
        {
            // 1. Guard Clauses
            if (student is null)
                throw new ArgumentNullException(nameof(student));

            if (course is null)
                throw new ArgumentNullException(nameof(course));

            // 2. Capacity Check (Using the new Custom Exception from Exercise 7)
            if (course.EnrolledCount >= course.Capacity)
                throw new CapacityReachedException(course.Code);

            // 3. Classify Academic Standing using switch expression
            string standing = student.GPA switch
            {
                >= 3.5m => "Honors",
                >= 2.5m => "GoodStanding",
                _       => "Academic Warning"
            };

            Console.WriteLine($" {student.Name} is in {standing}.");
            
            // 4. Return the non-destructive record
            return new EnrollmentRecord(student.Id, course.Code, DateTime.UtcNow);
        } // <--- Closes ProcessRegistration method
    } // <--- Closes EnrollmentService class
} // <--- Closes namespace