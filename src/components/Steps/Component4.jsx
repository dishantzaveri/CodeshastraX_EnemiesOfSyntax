import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AiOutlineClose } from "react-icons/ai";
import { MdAddCircleOutline, MdKeyboardArrowDown } from "react-icons/md";
import ReactImageUploading from "react-images-uploading";
import { Checkbox, FormControlLabel } from "@mui/material/node";
import { Axios } from "axios";

const Photo = ({ inputs, setInputs }) => {
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList[0]);
    setInputs((prevState) => ({ ...prevState, photo: imageList[0] }));
  };
  return (
    <ReactImageUploading
      value={inputs.photo}
      onChange={onChange}
      dataURLKey="data_url"
    >
      {({ onImageUpload, onImageRemove }) => (
        <div className="upload__image-wrapper">
          {inputs.photo ? (
            <div className="h-28 w-28 rounded-full bg-white relative">
              <div
                className="w-full h-full flex justify-center items-center"
                onClick={onImageUpload}
              >
                <img
                  src={inputs.photo["data_url"]}
                  alt=""
                  className="h-28 w-28 rounded-full"
                  onClick={() => {
                    setInputs((prevState) => ({ ...prevState, photo: null }));
                    onImageRemove(0);
                  }}
                />
              </div>
              <div className="absolute top-[-10px] right-[-10px] p-1 rounded-full bg-purple-200">
                <AiOutlineClose
                  className="text-red-500 text-sm"
                  onClick={() => {
                    setInputs((prevState) => ({ ...prevState, photo: null }));
                    onImageRemove(0);
                  }}
                />
              </div>
            </div>
          ) : (
            <div
              className="h-28 w-28 rounded-full bg-white flex justify-center items-center"
              onClick={onImageUpload}
            >
              <MdAddCircleOutline className="w-12 h-12 text-gray-600" />
            </div>
          )}
        </div>
      )}
    </ReactImageUploading>
  );
};

const DropDown = ({ inputs, setInputs }) => {
  return (
    <div className="flex flex-col pt-2">
      <div className="relative w-full">
        <select
          value={inputs.type}
          onChange={(e) =>
            setInputs((prevState) => ({ ...prevState, type: e.target.value }))
          }
          className="appearance-none w-full border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none bg-blue-100 focus:border-gray-400"
        >
          {["None", "Mentor", "Entrepreneur"].map((option) => (
            <option>{option}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default function FormPropsTextFields() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    type: "None",
  });
  const submit = async () => {
    if (
      inputs.name !== "" &&
      inputs.email !== "" &&
      inputs.password !== "" &&
      inputs.type !== "None"
    ) {
      if (inputs.type === "Mentor") {
        try {
          const options = {
            method: "POST",
            url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/mentor_register/",
            data: {
              name: inputs.name,
              email: inputs.email,
              password: inputs.password,
            },
          };
          await Axios(options)
            .then((res) => {
              console.log(res.data);
              const user = {
                ...res.data,
                name: inputs.name,
                isMentee: false,
                isMentor: true,
              };
              localStorage.setItem('user', stringify(user))
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (e) {
          alert(Object.entries(e.data));
        }
      } else {
        try {
          const options = {
            method: "POST",
            url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/mentor_register/",
            data: {
              name: inputs.name,
              email: inputs.email,
              password: inputs.password,
            },
          };
          await Axios(options)
            .then((res) => {
              console.log(res.data);
              const user = {
                ...res.data,
                name: inputs.name,
                isMentee: false,
                isMentor: true,
              };
              localStorage.setItem("user", JSON.stringify(user));
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("Please fill all the fields");
    }
  };
  localStorage.setItem("disabled", false);
  return (
    <div
      className="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, display: "" }}
      noValidate
      autoComplete="off"
    >
      <Box className="education">
        <h2 className="text-2xl font-bold mb-4">Register :</h2>
        <div className="flex">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <h1 className="text-lg">Name</h1>
              <TextField
                required
                id="standard-required"
                label=""
                variant="standard"
                value={inputs.name}
                onChange={(e) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex gap-6">
              <h1 className="text-lg">Email</h1>
              <TextField
                required
                id="standard-required"
                label=""
                variant="standard"
                value={inputs.email}
                onChange={(e) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
            </div>
            <div className="flex gap-6">
              <h1 className="text-lg">Password</h1>
              <TextField
                required
                id="standard-required"
                label=""
                type="password"
                variant="standard"
                value={inputs.password}
                onChange={(e) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    console.log(e.target.checked);
                    localStorage.setItem("disabled", e.target.checked);
                  }}
                />
              }
              label="Disabled"
            />
            <div className="flex gap-4 items-center">
              <h1 className="text-lg">Choose</h1>
              <DropDown inputs={inputs} setInputs={setInputs} />
            </div>
          </div>
          <div className="flex flex-col mx-auto gap-4 items-center">
            <h1 className="text-xl">Upload Pic</h1>
            <Photo inputs={inputs} setInputs={setInputs} />
          </div>
        </div>
        <button
          className="w-full mt-4 bg-purple-gray-700 py-2 text-gray-100"
          onClick={() => submit()}
        >
          Save
        </button>
      </Box>
    </div>
  );
}
