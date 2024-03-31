import JobCard from "../components/JobCard";
import SideNavbar from "../components/SideNavbar";
import { HiOutlineSearch } from "react-icons/hi";

const Jobs = () => {
  return (
    <div className="h-full flex">
      <SideNavbar />
      <div className="h-full w-full">
        <div className="px-8 py-6 border-b flex justify-between">
          <div className="flex gap-2">
            <div className="text-5xl font-bold">48</div>
            <div className="flex flex-col justify-center font-bold">
              <div className="leading-4">New</div>
              <div className="leading-4 text-emerald-400">job</div>
            </div>
          </div>
          <div className="bg-gray-100 flex gap-2 rounded-full px-4 py-2 items-center">
            <HiOutlineSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 focus:outline-0 w-[20vw]"
            />
          </div>
        </div>
        <div className="flex gap-4 px-8 py-6 w-full overflow-x-auto scrollbar-hide">
          <div className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            UI Designer
          </div>
          <div className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            UX Researcher
          </div>
          <div className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            3D
          </div>
          <div className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            Product Designer
          </div>
          <div className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            Graphic Designer
          </div>
          <di1 className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            Frontend Developer
          </di1>
          <div className="flex-shrink-0 bg-gray-200 px-4 py-2 rounded-full font-semibold">
            Full-Stack Developer
          </div>
          <div className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            Backend Developer
          </div>
          <div className="flex-shrink-0 bg-gray-100 px-4 py-2 rounded-full font-semibold">
            App Developer
          </div>
        </div>
        <div className="grid grid-cols-3 px-8 py-6 bg-gray-100 gap-8">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
