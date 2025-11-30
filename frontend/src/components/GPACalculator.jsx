import React, { useState } from "react";
import "./GPACalculator.css";

const GPACalculator = () => {
  const initialCourse = [{ name: "", credits: "", gradePoint: "" }];
  const [courses, setCourses] = useState(initialCourse);
  const [gpa, setGpa] = useState(null);

  const handleChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { name: "", credits: "", gradePoint: "" }]);
  };

  const resetCourses = () => {
    setCourses(initialCourse);
    setGpa(null);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      const points = parseFloat(course.gradePoint) || 0;
      const credits = parseFloat(course.credits) || 0;
      totalPoints += points * credits;
      totalCredits += credits;
    });

    const calculatedGpa =
      totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
    setGpa(calculatedGpa);
  };

  const isCalculateDisabled = courses.some(
    (course) =>
      course.name.trim() === "" ||
      course.credits === "" ||
      course.gradePoint === ""
  );

  return (
    <div className="gpa-container">
      <h1 className="gpa-title">Calculate Your GPA</h1>

      {courses.map((course, index) => (
        <div key={index} className="course-row">
          <input
            type="text"
            placeholder="Subject Name"
            value={course.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="course-input"
          />

          <select
            value={course.gradePoint}
            onChange={(e) => handleChange(index, "gradePoint", e.target.value)}
            className="course-select"
          >
            <option value="">GPA</option>
            <option value="4.0">4.0</option>
            <option value="3.5">3.5</option>
            <option value="3.0">3.0</option>
            <option value="2.5">2.5</option>
            <option value="2.0">2.0</option>
            <option value="0.0">0.0</option>
          </select>

          <select
            value={course.credits}
            onChange={(e) => handleChange(index, "credits", e.target.value)}
            className="course-select"
          >
            <option value="">Credits</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </select>

        </div>
      ))}

      <div className="buttons">
        <button onClick={addCourse} className="add-btn">
          Add Course
        </button>
         <button onClick={resetCourses} className="reset-btn">
          Reset
        </button>
        <button
          onClick={calculateGPA}
          className="calc-btn"
          disabled={isCalculateDisabled}
        >
          Calculate GPA
        </button>
       
      </div>

      {gpa !== null && (
        <div className="gpa-result">
          <p>Congrats  🥂🎉🥳</p>
          <h2>Your GPA is: {gpa}</h2>
        </div>
      )}

      <div className="grading-scale">
        <h3>IMS Grading Scale</h3>
        <table className="grading-table">
          <thead>
            <tr>
              <th>Marks (%)</th>
              <th>Grade Points</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>91-100</td><td>4.0</td><td>A+</td></tr>
            <tr><td>87-90</td><td>4.0</td><td>A</td></tr>
            <tr><td>80-86</td><td>3.5</td><td>B+</td></tr>
            <tr><td>72-79</td><td>3.0</td><td>B</td></tr>
            <tr><td>66-71</td><td>2.5</td><td>C+</td></tr>
            <tr><td>60-65</td><td>2.0</td><td>C</td></tr>
            <tr><td>Below 60</td><td>0.0</td><td>F</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GPACalculator;
