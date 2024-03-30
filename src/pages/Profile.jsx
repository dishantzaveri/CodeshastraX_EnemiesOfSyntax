import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import Header from "../components/Header/Header";
const Profile = () => {
  return (
    <div>
      <Header />
      <div className="px-64 bg-gradient-to-r from-[#2eb6b8] via-blue-300  to-[#DAF0F4] w-full h-64 relative">
        <div className="flex justify-between absolute  top-[100px] ">
          <div className="shadow bg-white shadow-gray-300 p-8 flex flex-col rounded h-fit">
            <div
              className="w-[80px] h-[80px] rounded-full object-cover self-center"
            ></div>
            <h1 className="font-bold text-lg cursor-pointer mt-4 self-center">
              Mihir
            </h1>
            <div className="mt-4">
              <div className="flex items-center mt-2">
                <MdEmail />
                <p className="ml-2"></p>
              </div>
              <div className="flex items-center mt-2">
                <FaBirthdayCake />
                <p className="ml-2">17/06/2002</p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="ml-8 mt-32 shadow bg-white shadow-gray-300  p-[20px] rounded min-w-[600px]">
              <div className="flex justify-between border-b-[1px] border-solid border-gray-300 pb-2 mb-2">
                <h1 className="font-semibold text-lg cursor-pointer self-center ">
                  About
                </h1>
                <AiFillEdit size={23} color="#2eb6b8" />
              </div>
              <div>
                <p className="font-semibold text-base">Experience : </p>
                  <>
                    <p>
                      <span className="font-semibold">Company</span> :{" "}
                      1
                    </p>
                    <p>
                      <span className="font-semibold">Role</span> :{" "}
                      3
                    </p>
                    <p>
                      <span className="font-semibold">Period</span> :{" "}
                      4
                    </p>
                    <p>
                      <span className="font-semibold">Location</span> :{" "}
                     5
                    </p>
                    <p>
                      <span className="font-semibold">Industry</span> :{" "}
                      6
                    </p>
                  </>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-base">Education : </p>
                  <>
                    <p>
                      <span className="font-semibold">College</span> :{" "}
                      
                    </p>
                    <p>
                      <span className="font-semibold">Year</span> :{" "}
                      
                    </p>
                    <p>
                      <span className="font-semibold">Course</span> :{" "}
                      
                    </p>
                    <p>
                      <span className="font-semibold">Grade</span> : {" "}
                      cgpa
                    </p>
                  </>
              </div>
            </div>
            <div className="ml-8 mt-4 shadow bg-white shadow-gray-300  p-[20px] rounded min-w-[600px] max-w-[700px]">
              <div className="flex justify-between border-b-[1px] border-solid border-gray-300 pb-2 mb-2">
                <h1 className="font-extrabold text-lg cursor-pointer self-center ">
                  Startups
                </h1>
                <AiFillEdit size={23} color="#2eb6b8" />
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
