import { FiBookmark } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import logo from "../assets/apple-logo.png";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <Link
      to="/jobs/123"
      className="rounded-2xl px-4 py-4 min-w-[300px] bg-white shadow-lg"
    >
      <div className="flex justify-between mb-12">
        <div className="flex">
          <div className="flex gap-2">
            <div className="px-2 py-2 rounded-full border">
              <img src={logo} alt="" className="h-8 w-8 object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="leading-5 text-xl font-semibold">UI Designer</div>
              <div className="leading-5">Apple</div>
            </div>
          </div>
        </div>
        <FiBookmark className="text-2xl" />
      </div>
      <div className="flex gap-4 my-6">
        <div className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-full font-semibold">
          Full time
        </div>
        <div className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-full font-semibold">
          Remote
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <TiLocation className="text-emerald-400 text-2xl" />
          <div className="font-bold">Atlanta, GA</div>
        </div>
        <div className="">
          <span className="text-xl font-bold">$14</span> / month
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
