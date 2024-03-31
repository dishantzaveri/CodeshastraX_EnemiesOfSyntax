import Webcam from "react-webcam";

const CustomWebcam = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <Webcam height={250} width={250} />
    </div>
  );
};

export default CustomWebcam;
