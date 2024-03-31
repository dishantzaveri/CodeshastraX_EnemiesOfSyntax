import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AiOutlineClose } from "react-icons/ai";
import { MdAddCircleOutline, MdKeyboardArrowDown } from "react-icons/md";
import ReactImageUploading from "react-images-uploading";
import { Checkbox, FormControlLabel } from "@mui/material/node";
import CancelIcon from "@mui/icons-material/Cancel";
import dayjs, { Dayjs } from "dayjs";

const GST = ({ gst }) => {
  const [data, setData] = useState(["div"]);
  function removeGst() {
    const curr = [...data];
    curr.pop();
    setData(curr);
  }

  console.log(gst);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-full py-2 px-3 shadow-lg">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-bold mt-2">
              Name: {gst.legalNameOfBusiness}
            </h1>
            <h1 className="mt-[5px]">GST IN : {gst.gstin}</h1>
          </div>
          <button
            onClick={() => removeGst()}
            className=" bg-purple-gray-500 hover:bg-purple-gray-600 text-white font-bold py-2 px-4 rounded m-5 "
          >
            <CancelIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

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

const steps = ["Register", "Education", "Work Experience", "Startup Details"];

const Component4 = () => {
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
          await axios(options)
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
          await axios(options)
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
};

const Component3 = () => {
  const [input, setInput] = useState("");
  const [startups, setStartups] = useState([]);
  const { token } = localStorage.getItem("token");
  const getStartups = () => {
    let config = {
      method: "get",
      url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/startup/",
      headers: {
        Authorization: "Token " + token,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setStartups(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const postGst = () => {
  //   let config = {
  //     method: 'post',
  //     url: 'https://vismayvora.pythonanywhere.com/account/gstverify/',
  //     headers: {
  //       'Authorization': 'Token ' + token
  //     },
  //     data: {
  //       gstnumber: input
  //     }
  //   };
  //   console.log(config)
  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       setStartups(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const submit = async () => {
    var formdata = new FormData();
    formdata.append("gstnumber", input);
    try {
      const options = {
        method: "POST",
        url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/mentor_register/",
        data: formdata,
      };

      const data = await Axios(options)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("verification", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStartups();
  }, []);

  return (
    <div className="w-full">
      <div className="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full">
        <div className="pt-2">
          <h1 className="text-2xl font-semibold uppercase mb-4">GST</h1>
          <input
            className="px-3 py-2"
            placeholder={`Enter GST Number`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
          />
          <button
            className="px-3 py-2 bg-purple-gray-700"
            onClick={() => submit()}
          >
            add
          </button>
          <div className="w-full flex flex-col gap-4 mt-4"></div>
          {startups !== [] && startups.map((gst) => <GST gst={gst} />)}
        </div>
      </div>
    </div>
  );
};

const Component2 = () => {
  const [education, setEducation] = useState(null);
  const { token } = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  const [list, setList] = useState(education ? education : []);
  const [input, setInput] = useState({
    institute: "",
    degree: "",
    study_field: "",
    start_date: dayjs(new Date()),
    end_date: dayjs(new Date()),
  });
  const submit = () => {
    console.log(list);
    if (list !== []) {
      setEducation([...list]);
    } else {
      alert("Please add atleast one education");
    }
  };
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/education/",
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    axios(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const add = async () => {
    if (
      input.institute &&
      input.degree &&
      input.study_field &&
      input.start_date &&
      input.end_date
    ) {
      const curr = [...list];
      curr.push(input);
      setList(curr);
      const options = {
        method: "POST",
        url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/education/",
        data: {
          institute: input.institute,
          degree: input.degree,
          study_field: input.study_field,
          start_date: input.start_date,
          end_date: input.end_date,
        },
        header: {
          Authorization: `Token ${token}`,
        },
      };
      console.log(options);
      await axios(options)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please fill all the fields");
    }
    console.log(list);
  };
  const remove = (index) => {
    const curr = [...list];
    curr.splice(index, 1);
    setList(curr);
  };
  return (
    <div
      className="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "",
      }}
      noValidate
      autoComplete="off"
    >
      <Box className="education">
        <h2 className="text-2xl font-bold mb-4">Education :</h2>
        <div className="flex flex-col gap-2 mb-3">
          {list?.map((currentItem, index) => (
            <div
              key={index}
              className="flex w-full justify-between items-center bg-gray-200 px-3 py-2"
            >
              <h1>{currentItem.degree}</h1>
              <MdDelete
                className="text-red-500 cursor-pointer"
                onClick={() => remove(index)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <h1 className="text-lg">Institution Name</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.institute}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  institute: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Degree</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.degree}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  degree: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Study Field</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.study_field}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  study_field: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Start year</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={input.start_date}
                onChange={(newValue) => {
                  setInput((prevState) => ({
                    ...prevState,
                    start_date: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">End year</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={input.end_date}
                onChange={(newValue) => {
                  setInput((prevState) => ({
                    ...prevState,
                    end_date: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <button
          className="w-full mt-4 bg-purple-gray-700 py-2 text-gray-100"
          onClick={() => add()}
        >
          Add
        </button>
        <button
          className="w-full mt-4 bg-purple-gray-700 py-2 text-gray-100"
          onClick={() => submit()}
        >
          {"Save"}
        </button>
      </Box>
    </div>
    //   </div>
  );
};

const Component1 = () => {
  const [work, setWork] = useState(null);
  const { token } = localStorage.getItem("token");
  const [list, setList] = useState(work ? [...work] : []);
  const [input, setInput] = useState({
    job_title: "",
    company_name: "",
    location: "",
    industry: "",
    start_year: "",
    end_year: "",
  });
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/experience/",
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    axios(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submit = () => {
    console.log(list);
    if (list !== []) {
      setWork([...list]);
    } else {
      alert("Please add atleast one work experience");
    }
  };
  const add = () => {
    if (
      input.job_title &&
      input.company_name &&
      input.location &&
      input.industry &&
      input.start_year &&
      input.end_year
    ) {
      const curr = [...list];
      curr.push(input);
      setList(curr);
      var dd = String(input.start_year.getDate()).padStart(2, "0");
      var mm = String(input.start_year.getMonth() + 1).padStart(2, "0");
      var yyyy = input.start_year.getFullYear();
      let start = mm + "-" + dd + "-" + yyyy;
      var dd = String(input.end_year.getDate()).padStart(2, "0");
      var mm = String(input.end_year.getMonth() + 1).padStart(2, "0");
      var yyyy = input.end_year.getFullYear();
      let end = mm + "-" + dd + "-" + yyyy;
      // const options = {
      //   method: 'POST',
      //   url: '/account/experience/',
      //   data: {
      //     job_title: input.job_title,
      //     company_name: input.company_name,
      //     location: input.location,
      //     industry: input.industry,
      //     start_year: start,
      //     end_year: end,
      //   },
      //   headers: {
      //     'Authorization': `Token ${token}`,
      //   }
      // }
      // console.log(options)
      // axios(options)
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // var FormData = require('form-data');
      // var data = new FormData();

      // var config = {
      //   method: 'POST',
      //   url: 'https://vismayvora.pythonanywhere.com/account/experience/',
      //   headers: {
      //     'Authorization': 'Token ' + token,
      //     'Cookie': 'csrftoken=ONSFu7hzHlkazVZWCUFueznNNNq0ZUfY',
      //   },
      //   data : data
      // };

      // axios(config)
      // .then(function (response) {
      //   console.log(JSON.stringify(response.data));
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      // var data = new FormData();
      // data.append('job_title', input.job_title);
      // data.append('company_name', input.company_name);
      // data.append('location', input.location);
      // data.append('industry', input.industry);
      // data.append('start_date', start);
      // data.append('end_date', end);
      const data = {
        job_title: input.job_title,
        company_name: input.company_name,
        location: input.location,
        industry: input.industry,
        start_date: String(start),
        end_date: String(end),
      };
      var config = {
        method: "post",
        url: "https://71w0x6q2-8000.inc1.devtunnels.ms/account/experience/",
        headers: {
          Authorization: "Token " + token,
        },
        data: data,
      };
      console.log(config);
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please fill all the fields");
    }
    console.log(list);
  };
  const remove = (index) => {
    const curr = [...list];
    curr.splice(index, 1);
    setList(curr);
  };
  return (
    <div
      className="bg-purple-gray-100 px-6 py-8 rounded shadow-md text-black w-full"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "",
      }}
      noValidate
      autoComplete="off"
    >
      <Box className="education">
        <h2 className="text-2xl font-bold mb-4">Work Experience :</h2>
        <div className="flex flex-col gap-2 mb-3">
          {list?.map((currentItem, index) => (
            <div
              key={index}
              className="flex w-full justify-between items-center bg-gray-200 px-3 py-2"
            >
              <h1>{currentItem.company_name}</h1>
              <MdDelete
                className="text-red-500 cursor-pointer"
                onClick={() => remove(index)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <h1 className="text-lg">Job Title</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.job_title}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  job_title: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Company Name</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.company_name}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  company_name: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Location</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.location}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  location: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Industry</h1>
            <TextField
              required
              id="standard-required"
              label=""
              variant="standard"
              value={input.industry}
              onChange={(e) =>
                setInput((prevState) => ({
                  ...prevState,
                  industry: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">Start year</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={input.start_year}
                onChange={(newValue) => {
                  setInput((prevState) => ({
                    ...prevState,
                    start_year: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="flex gap-6">
            <h1 className="text-lg">End year</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={input.end_year}
                onChange={(newValue) => {
                  setInput((prevState) => ({
                    ...prevState,
                    end_year: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" />
                )}
              />
            </LocalizationProvider>
          </div>
        </div>
        <button
          className="w-full mt-4 bg-purple-gray-700 py-2 text-gray-100"
          onClick={() => add()}
        >
          Add
        </button>
        <button
          className="w-full mt-4 bg-purple-gray-700 py-2 text-gray-100"
          onClick={() => submit()}
        >
          {"Save"}
        </button>
      </Box>
    </div>
  );
};

export default function Signup() {
  const [page, setPage] = useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleBack = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        <div className="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 py-4">
          <h1 className="text-2xl m-8 font-bold">Profile Details </h1>
          <div className="w-full my-4">
            <Stepper activeStep={page} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel color="inherit">{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          {page === 1 ? (
            <Component2 />
          ) : page === 2 ? (
            <Component1 />
          ) : page === 3 ? (
            <Component3 />
          ) : (
            <Component4 />
          )}
          <div className="w-full">
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={page === 0}
                onClick={() => handleBack()}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {page !== steps.length && (
                <Button onClick={() => handleNext()}>
                  {page === totalSteps() - 1 ? "Finish" : "Next"}
                </Button>
              )}
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}
