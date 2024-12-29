import Course from "../../pages/Home/Course/Course";
import CourseList from "../../pages/Home/CourseList/CourseList";
import NavBar from "../../pages/Home/Shared/NavBar";

const Landing = () => {
  return (
    <div className="">
      <NavBar />
      <Course />
      <CourseList />
    </div>
  );
};

export default Landing;
