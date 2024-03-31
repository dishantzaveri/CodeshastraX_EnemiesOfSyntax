import { useContext, useState, useEffect } from "react";
import {Stack, Chip} from "@mui/material";
import { interviewContext } from "../interviewContext";
import React from "react";

const Chips = () => {
    const { setInterviewLevel } = useContext(interviewContext);
    const [selectedChip, setSelectedChip] = useState("Junior");

    useEffect(() => {
        setInterviewLevel(selectedChip);
    }, [selectedChip])

    return(
        <Stack direction="row" sx={{width: "50%", flexGrow: 1}} justifyContent="space-around" alignItems="center">
            <Chip label="Junior" onClick={() => {setSelectedChip("Junior")}} sx={{width: "25%", backgroundColor: '#ffffff', color: '#000000'}}></Chip>
            <Chip label="Senior" onClick={() => {setSelectedChip("Senior")}} sx={{width: "25%", backgroundColor: '#ffffff', color: '#000000'}}></Chip>
        </Stack>

    )
}

export {Chips};
