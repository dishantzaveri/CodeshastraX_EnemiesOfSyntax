import SideNavbar from "../components/SideNavbar";

const Home = () => {
  return (
    <div className="h-full w-screen flex">
      <SideNavbar />
      <div className="h-full w-full">
        <div className="px-8 py-6 border-b">
          <div className="flex gap-2">
            <div className="text-5xl font-bold">48</div>
            <div className="flex flex-col justify-center font-bold">
              <div className="leading-4">New</div>
              <div className="leading-4 text-emerald-400">job</div>
            </div>
          </div>
        </div>
        <div className="">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
