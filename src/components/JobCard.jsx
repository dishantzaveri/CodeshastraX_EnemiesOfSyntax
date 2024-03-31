import { FiBookmark } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import logo from "../assets/apple-logo.png";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Link
      to={`/jobs/${job?.id}`}
      className="rounded-2xl px-4 py-4 min-w-[300px] bg-white shadow-lg"
    >
      <div className="flex justify-between mb-12">
        <div className="flex gap-2">
          <div className="px-2 py-2 rounded-full border aspect-square flex-shrink-0">
            <img src={logo} alt="" className="h-8 w-8 object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="leading-5 text-xl font-semibold line-clamp-1">
              {job?.title}
            </div>
            <Link to={`../company/${job?.company_name}`} className="leading-5">
              {job?.company_name}
            </Link>
          </div>
        </div>
        <FiBookmark className="text-2xl flex-shrink-0" />
      </div>
      <div className="flex gap-4 my-6">
        <div className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-full font-semibold">
          {job?.time}
        </div>
        <div className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-full font-semibold">
          {job?.period}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <TiLocation className="text-emerald-400 text-2xl" />
          <div className="font-bold  line-clamp-1">{job?.location}</div>
        </div>
        <div className="">
          <span className="text-xl font-bold text-nowrap">${job?.salary}</span>{" "}
          / month
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
