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

    try {
      await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setSuccess("Course added successfully!");
      setFormData({
        title: "",
        description: "",
        badge_text: "",
        badge_color: "",
        instructor_name: "",
      });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to add course. Please try again."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-200">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Add a New Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Course title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
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
              placeholder="Course description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
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
              placeholder="Badge text"
              value={formData.badge_text}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label
              htmlFor="badge_color"
              className="block text-sm font-medium text-gray-700"
            >
              Badge Color
            </label>
            <input
              type="text"
              name="badge_color"
              id="badge_color"
              placeholder="Badge color"
              value={formData.badge_color}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
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
              placeholder="Instructor's name"
              value={formData.instructor_name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          {success && (
            <p className="text-sm text-green-500 text-center">{success}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 focus:ring-2 focus:ring-sky-300 focus:outline-none"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Course;
