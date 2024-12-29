import { useState, useEffect } from "react";
import axios from "axios";
import "./courselist.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage
      if (!token) {
        setError("Authorization token is missing. Please log in first.");
        return;
      }

      try {
        const response = await axios.get(
          "https://react-interview.crd4lc.easypanel.host/api/course",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setCourses(response.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setError("Failed to fetch courses. Please try again.");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-list">
      <h1 className="title">Courses</h1>
      {error && <p className="error">{error}</p>}
      <div className="card-container">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <div
              className="badge"
              style={{ backgroundColor: course.badge_color }}
            >
              {course.badge_text}
            </div>
            <h2 className="card-title">{course.title}</h2>
            <p className="card-description">{course.description}</p>
            <div className="card-instructor">
              Instructor: <span>{course.instructor_name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
