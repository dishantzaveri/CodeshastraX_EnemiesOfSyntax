import SideNavbar from "../components/SideNavbar";

const Behavorial = () => {
  return (
    <div className="h-full flex">
      <SideNavbar />
      <iframe
        className="w-full"
        src="https://futureforge.vercel.app/demo"
        frameborder="0"
        allow="camera; microphone"
      ></iframe>
    </div>
  );
};

export default Behavorial;
