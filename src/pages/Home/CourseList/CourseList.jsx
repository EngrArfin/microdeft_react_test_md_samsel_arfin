import { useState, useEffect } from "react";
import axios from "axios";
import "./courselist.css";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://react-interview.crd4lc.easypanel.host/api/course",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        setCourses(response.data);
      } catch (err) {
        setError("Failed to fetch courses. Please try again.");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="course-list bg-sky-200">
      <h1 className="title">All Courses</h1>
      {error && <p className="error">{error}</p>}

      <div className="card-container">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="card">
              <div
                className="badge"
                style={{ backgroundColor: course.badge_color || "#ccc" }}
              >
                {course.badge_text || "No Badge"}
              </div>
              <h2 className="card-title">{course.title}</h2>
              <p className="card-description">{course.description}</p>
              <div className="card-instructor">
                Instructor: <span>{course.instructor_name || "Unknown"}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
