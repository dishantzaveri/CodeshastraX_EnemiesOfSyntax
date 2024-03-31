import SideNavbar from "../components/SideNavbar";
import logo from "../assets/apple-logo.png";
import Carousel from "react-material-ui-carousel";
import companyVideo from "../assets/company.mp4";
import company1 from "../assets/company1.jpg";
import company2 from "../assets/company2.jpeg";
import JobCard from "../components/JobCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Company = () => {
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
    <div className="flex w-full">
      <SideNavbar />
      <div className="grid grid-cols-12 w-full">
        <div className="px-8 py-6 col-span-8">
          <div className="flex items-center flex-col w-full">
            <img src={logo} alt="" className="h-20 w-20 object-cover mx-2" />
            <div className="text-4xl font-semibold">Apple</div>
          </div>
          <Carousel
            sx={{ width: "100%", height: "55vh", margin: "30px 0px" }}
            animation="slide"
            interval={20000}
          >
            <iframe
              width="100%"
              height="440"
              src="https://www.youtube.com/embed/zDAYZU4A3w0?autoplay=1?si=LgVIOyByaM_pjDXs&amp;start=47"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <video autoPlay loop muted className="absolute -z-10 w-full h-auto">
              <source src={companyVideo} type="video/mp4" />
            </video>
            <img src={company1} alt="" />
            <img src={company2} alt="" />
          </Carousel>
          <div className="text-xl font-semibold mb-2">About us</div>
          <div className="">
            Apple Inc. stands as a global leader in technology, renowned for its
            groundbreaking products like the iPhone, iPad, Mac, and Apple Watch,
            alongside an array of innovative services. Upheld by its core values
            of innovation, simplicity, and quality, Apple continually pushes the
            boundaries of what's possible while maintaining a strong commitment
            to customer satisfaction and social responsibility. With a focus on
            excellence and inclusivity, Apple continues to shape the future of
            technology, setting standards for design, sustainability, and
            societal impact around the world.
          </div>
          <div className="text-xl font-semibold my-2">Jobs Available</div>
          <div className="flex gap-4 py-4 w-full overflow-x-auto scrollbar-hide">
            {jobs
              ? jobs.map((job) => <JobCard key={job.id} job={job} />)
              : null}
          </div>
          <div className="text-xl font-semibold my-2">Employee Reviews</div>
          <div className="flex gap-4 items-center px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-20 w-20 object-cover" />
            <div className="">
              <div className="font-semibold text-lg">
                Apple fosters a culture of innovation and excellence, where
                every day presents new challenges and opportunities for personal
                and professional growth, making it an exhilarating place to
                work.
              </div>
              <Link to="profile/123" className="text-sm text-gray-400">
                -Dishant Zaveri
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-20 w-20 object-cover" />
            <div className="">
              <div className="font-semibold text-lg">
                Working at Apple is an inspiring journey fueled by innovation,
                collaboration, and a relentless dedication to delivering
                exceptional products that positively impact the world.
              </div>
              <Link to="profile/123" className="text-sm text-gray-400">
                -Dishant Zaveri
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-20 w-20 object-cover" />
            <div className="">
              <div className="font-semibold text-lg">
                Best working environment and amazing food .
              </div>
              <Link to="profile/123" className="text-sm text-gray-400">
                -Dishant Zaveri
              </Link>
            </div>
          </div>
        </div>
        <div className="px-8 py-6 w-full col-span-4">
          <div className="text-lg font-semibold mb-4">Alumnis Working Here</div>
          <div className="flex gap-4 items-center border-2 hover:shadow-lg px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-8 w-8 object-cover" />
            <div className="font-semibold">Dishant Zaveri</div>
          </div>
          <div className="flex gap-4 items-center border-2 hover:shadow-lg px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-8 w-8 object-cover" />
            <div className="font-semibold">Dishant Zaveri</div>
          </div>
          <div className="flex gap-4 items-center border-2 hover:shadow-lg px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-8 w-8 object-cover" />
            <div className="font-semibold">Dishant Zaveri</div>
          </div>
          <div className="text-lg font-semibold">Similar Companies</div>
          <div className="flex gap-4 items-center border-2 hover:shadow-lg px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-8 w-8 object-cover" />
            <div className="font-semibold">Google</div>
          </div>
          <div className="flex gap-4 items-center border-2 hover:shadow-lg px-4 py-2 rounded-xl my-4">
            <img src={logo} alt="" className="h-8 w-8 object-cover" />
            <div className="font-semibold">Meta</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
