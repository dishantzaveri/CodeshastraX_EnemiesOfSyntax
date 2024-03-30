import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { TbChartInfographic } from "react-icons/tb";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";

const SideNavbar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-[20vw] px-8 py-8 border-r-2 border-gray-200">
      <div className="">
        <div className="text-xl font-bold flex gap-4 items-center px-4 mb-8">
          <AiFillHome />
          GoodJob
        </div>
        <Link
          to="/"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <AiFillHome />
          Home
        </Link>
        <Link
          to="/"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <TbChartInfographic />
          Dashboard
        </Link>
        <Link
          to="/"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <MdOutlineScreenSearchDesktop />
          Courses
        </Link>
        <Link
          to="/"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <IoBook />
          Learn
        </Link>
      </div>
      <div className="px-4 py-3 rounded-2xl bg-gray-100/50 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="bg-black w-12 h-12 rounded-full"></div>
          <div className="flex flex-col flex-grow leading-1 text-xl font-semibold justify-center">
            <div className="">Mihir</div>
            <div className="text-sm">Student</div>
          </div>
        </div>
        <div className="text-xl cursor-pointer px-2 py-2 rounded-full hover:bg-gray-200">
          <HiOutlineDotsVertical className="" />
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
