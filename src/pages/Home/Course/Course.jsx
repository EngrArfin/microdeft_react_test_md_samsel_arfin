import { useState } from "react";
import axios from "axios";

const Course = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    badge_text: "",
    badge_color: "",
    instructor_name: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage

    if (!token) {
      setError("Authorization token is missing. Please log in first.");
      return;
    }

    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess("Course added successfully!");
      console.log("Course response:", response.data);
      setFormData({
        title: "",
        description: "",
        badge_text: "",
        badge_color: "",
        instructor_name: "",
      });
    } catch (error) {
      console.error("Error adding course:", error);
      setError("Failed to add course. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add a New Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Course Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter course title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Course Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter course description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Badge Text */}
          <div>
            <label
              htmlFor="badge_text"
              className="block text-sm font-medium text-gray-700"
            >
              Badge Text
            </label>
            <input
              type="text"
              name="badge_text"
              id="badge_text"
              placeholder="Enter badge text (e.g., Featured)"
              value={formData.badge_text}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Badge Color */}
          <div>
            <label
              htmlFor="badge_color"
              className="block text-sm font-medium text-gray-700"
            >
              Badge Color
            </label>
            <input
              type="color"
              name="badge_color"
              id="badge_color"
              value={formData.badge_color}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Instructor Name */}
          <div>
            <label
              htmlFor="instructor_name"
              className="block text-sm font-medium text-gray-700"
            >
              Instructor Name
            </label>
            <input
              type="text"
              name="instructor_name"
              id="instructor_name"
              placeholder="Enter instructor name"
              value={formData.instructor_name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          {success && (
            <p className="text-sm text-green-500 text-center">{success}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Course;
