import { useContext } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { interviewContext } from "../interviewContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

const Dropdown = () => {
  const { interviewJob, setInterviewJob } = useContext(interviewContext);

  const handleChangeJob = (event: SelectChangeEvent) => {
    setInterviewJob(event.target.value);
  };
  return (
    <FormControl sx={{ width: "50%" }}>
      <Select
        labelId="jobInput"
        notched={false}
        label="Job Title"
        id="jobSelector"
        value={interviewJob}
        onChange={handleChangeJob}
      >
        <MenuItem value={"React"}>React Developer</MenuItem>
        <MenuItem value={"Angular"}>Angular Developer</MenuItem>
        <MenuItem value={"Java"}>Java Developer</MenuItem>
        <MenuItem value={"C#"}>C# Developer</MenuItem>
        <MenuItem value={"Python"}>Python Developer</MenuItem>
        <MenuItem value={"Data Scientist"}>Data Scientist</MenuItem>
        <MenuItem value={"Cybersecurity"}>Cybersecurity Engineer</MenuItem>
        <MenuItem value={"DevOps"}>DevOps Engineer</MenuItem>
      </Select>
    </FormControl>
  );
};

export { Dropdown };
