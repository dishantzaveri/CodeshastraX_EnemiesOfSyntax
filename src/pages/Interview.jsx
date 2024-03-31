import SideNavbar from "../components/SideNavbar";
import { Link } from "react-router-dom";

const Interview = () => {
  return (
    <div className="h-full flex">
      <SideNavbar />
      <div className="flex justify-evenly items-center w-full">
        <Link
          to="../theory"
          className="px-12 py-8 border rounded-xl text-3xl font-semibold"
        >
          Theory
        </Link>
        <Link
          to="../behaviour-interview"
          className="px-12 py-8 border rounded-xl text-3xl font-semibold"
        >
          Behaviour
        </Link>
      </div>
    </div>
  );
};

export default Interview;
