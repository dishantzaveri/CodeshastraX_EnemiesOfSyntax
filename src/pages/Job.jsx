import { Link, useParams } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import logo from "../assets/apple-logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsBookmarkFill } from "react-icons/bs";
import JobCard1 from "../components/JobCard1";
import { useEffect, useState } from "react";
import axios from "axios";

const Job = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    await axios
      .get("https://71w0x6q2-8000.inc1.devtunnels.ms/account/jobs/")
      .then((res) => {
        console.log(res.data.filter((x) => x.id === parseInt(id)));
        setJobs(res.data);
        setJob(res.data.filter((x) => x.id === parseInt(id))[0]);
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="h-full flex">
      <SideNavbar />
      <div className="w-full grid grid-cols-12 px-8">
        <div className="px-8 py-6 col-span-8">
          <div className="flex justify-between">
            <div className="text-4xl font-semibold">{job.title}</div>
            <div className="flex gap-2">
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg shadow-sm">
                Apply Now
              </button>
              <button className="text-emerald-500 px-4 py-2 rounded-lg border-2 shadow-sm">
                <BsBookmarkFill />
              </button>
            </div>
          </div>
          <div className="flex py-4">
            <img src={logo} alt="" className="h-16 w-16 object-cover mx-2" />
            <div className="flex flex-col justify-between">
              <div className="flex gap-1 items-center">
                <Link
                  to="/company/123"
                  className="text-emerald-400 text-xl font-semibold"
                >
                  {job.company_name}
                </Link>
                <div className="text-xl">•</div>
                <IoLocationOutline className="text-2xl text-gray-500" />
                <div className="font-semibold text-gray-500">
                  {job.location}
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-full font-semibold">
                  {job.time}
                </div>
                <div className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-full font-semibold">
                  {job.period}
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg font-semibold my-2">About this role</div>
          <div className="">{job.role}</div>
          <div className="text-lg font-semibold my-2">Requirements</div>
          <div className="">{job.requirements}</div>
          {/* <div className="text-lg font-semibold my-2">Key Responsibilities</div> */}
          {/* <div className="flex gap-2">
            <div className="">•</div>
            UI Design: Design visually stunning and intuitive user interfaces
            for various Apple software products, including mobile applications,
            desktop software, and web applications.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            User Experience (UX) Enhancement: Collaborate closely with
            cross-functional teams, including UX designers, product managers,
            and engineers, to understand user needs and translate them into
            elegant design solutions.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Prototyping and Iteration: Create interactive prototypes and iterate
            based on user feedback, ensuring designs are user-centered and meet
            both aesthetic and functional requirements.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Visual Design: Develop high-fidelity mockups, icons, and visual
            assets that align with Apple's design language and brand guidelines,
            maintaining a consistent and polished look and feel across all
            products.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Typography and Iconography: Select appropriate typography and create
            custom icons that enhance usability and readability while reflecting
            Apple's design principles.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Responsive Design: Design adaptive layouts that provide a seamless
            user experience across different screen sizes and resolutions, from
            iPhone and iPad to Mac and Apple Watch.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Accessibility: Advocate for accessibility best practices and ensure
            designs are inclusive and accessible to users with diverse needs and
            abilities.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Collaboration and Communication: Communicate design concepts
            effectively to stakeholders using sketches, wireframes, and
            prototypes, and collaborate with engineering teams to ensure
            successful implementation of designs.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Stay Updated: Keep abreast of industry trends, design tools, and
            emerging technologies, and leverage new techniques to continually
            improve the quality and innovation of Apple's user interfaces.
          </div> */}
          {/* <div className="text-lg font-semibold my-2">Qualification</div>
          <div className="flex gap-2">
            <div className="">•</div>
            Bachelor's degree in Design, Human-Computer Interaction, or a
            related field.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Proven experience as a UI Designer, with a strong portfolio
            showcasing your design skills and process.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Proficiency in design tools such as Sketch, Adobe XD, or Figma, as
            well as prototyping tools like InVision or Proto.io.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Solid understanding of user-centered design principles, interaction
            design, and information architecture.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Excellent visual design skills with a keen eye for typography,
            color, and layout.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Familiarity with Apple's design language (Human Interface
            Guidelines) and a passion for Apple's products and ecosystem.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Strong communication and collaboration skills, with the ability to
            work effectively in a fast-paced, dynamic environment.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Experience with motion design and animation is a plus.
          </div>
          <div className="flex gap-2">
            <div className="">•</div>
            Stay Updated: Keep abreast of industry trends, design tools, and
            emerging technologies, and leverage new techniques to continually
            improve the quality and innovation of Apple's user interfaces.
          </div> */}
          <div className="text-lg font-semibold my-2">Qualification</div>
          <div className="">{job.qualification}</div>
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
          <div className="text-lg font-semibold">Similar Jobs</div>
          <div className="flex flex-col">
            {jobs
              ? jobs.map((job) => <JobCard key={job.id} job={job} />)
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
