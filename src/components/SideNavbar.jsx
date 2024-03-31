import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { TbChartInfographic } from "react-icons/tb";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LiaTrashAltSolid } from "react-icons/lia";
import { GrUserWorker } from "react-icons/gr";
import logo from "../assets/logo.png";

const SideNavbar = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-[20vw] px-8 py-8 border-r-2 border-gray-200 sticky top-0">
      <div className="w-full">
        <div className="text-xl font-bold flex gap-4 items-center px-4 mb-8">
          <img className="w-16" src={logo} alt="" />
          Future Forge
        </div>
        <Link
          to="/"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <AiFillHome />
          Home
        </Link>
        <Link
          to="/jobs"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <GrUserWorker />
          Jobs
        </Link>
        <Link
          to="/profile"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <TbChartInfographic />
          Dashboard
        </Link>
        <Link
          to="/courses"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <MdOutlineScreenSearchDesktop />
          Courses
        </Link>
        <Link
          to="/interview"
          className="w-full flex gap-4 items-center text-lg hover:bg-gray-100/15 py-3 px-4 rounded-2xl hover:shadow-sm my-3"
        >
          <IoBook />
          Practice
        </Link>
      </div>
      <div className="px-4 py-3 rounded-2xl w-full bg-gray-100/50 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="bg-black w-12 h-12 rounded-full"></div>
          <div className="flex flex-col flex-grow leading-1 text-xl font-semibold justify-center">
            <div className="">Mihir</div>
            <div className="text-sm">Student</div>
          </div>
        </div>
        <Menu as="div" className="">
          <div>
            <Menu.Button className="inline-flex w-full justify-center text-xl px-2 py-2 rounded-full hover:bg-gray-200">
              <HiOutlineDotsVertical className="" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute bottom-20 mt-2 w-40 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <button className="text-red-600 group flex w-full items-center rounded-md px-2 py-2 text-sm">
                    <LiaTrashAltSolid className="mr-2 h-5 w-5" />
                    Logout
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default SideNavbar;
