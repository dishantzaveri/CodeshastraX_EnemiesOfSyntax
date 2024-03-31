import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import SideNavbar from "../components/SideNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import courses from "../data/course_recommendation.json";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    await axios
      .get("https://71w0x6q2-8000.inc1.devtunnels.ms/account/jobs/")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="h-full flex">
      <SideNavbar />
      <div className="px-8 py-6 h-full overflow-hidden">
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">Jobs for you</div>
          <Link to="/jobs" className="text-emerald-500">
            View all
          </Link>
        </div>
        <div className="flex gap-4 py-4 w-full overflow-x-auto scrollbar-hide">
          {jobs ? jobs.map((job) => <JobCard key={job.id} job={job} />) : null}
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-3xl font-semibold">Courses for you</div>
          <Link to="/courses" className="text-emerald-500">
            View all
          </Link>
        </div>
        <div className="flex gap-4 py-4 w-full overflow-x-auto scrollbar-hide">
          {courses
            ? courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
