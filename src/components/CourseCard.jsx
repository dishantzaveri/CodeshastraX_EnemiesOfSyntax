import { FiBookmark } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { RiExternalLinkFill } from "react-icons/ri";

const CourseCard = ({ course }) => {
  return (
    <div className="rounded-2xl px-6 py-6 min-w-[300px] min-h-[250px] bg-white shadow-lg flex flex-col justify-between">
      <div className="">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col justify-center">
            <div className="leading-6 text-xl font-semibold">
              {course.course_title}
            </div>
            <div className="text-sm text-gray-400">
              {course.content_duration}
            </div>
          </div>
          <a href={course.url} target="_blank">
            <RiExternalLinkFill className="text-2xl" />
          </a>
        </div>
        <div className="flex gap-4 my-4">
          <div className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-full font-semibold">
            {course.subject}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="">
            <span className="text-xl font-bold">{course.num_subscribers}</span>{" "}
            subs
          </div>
        </div>
        <div className="text-xl font-bold">
          $<span className="text-lg">{course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
