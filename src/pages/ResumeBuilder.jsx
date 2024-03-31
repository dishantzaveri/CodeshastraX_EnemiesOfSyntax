import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center gap-4 absolute top-0 bg-white text-2xl font-semibold px-6 py-3">
        <IoArrowBack onClick={() => navigate(-1)} />
        Resume Builder
      </div>
      <iframe
        src="https://www.open-resume.com/resume-builder"
        frameborder="0"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default ResumeBuilder;
