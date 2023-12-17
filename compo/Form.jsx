import * as React from "react";
import style from "../form.module.css";
import InputLabel from "@mui/material/InputLabel";

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";

import Mcq from "./Mcq";
import Fill from "./Fill";
import Written from "./Written";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function Props(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Form = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let [select, setSelect] = useState("");
  let uvalue2 = (x) => {
    setSelect(x.target.value);
  };
  let uselect = (x) => {
    setSelect(x.target.value);
  };
  let uvalue1 = (x) => {
    setSelect(x.target.value);
  };

  return (
    <div>
      <form action=""  className={style.main}>
        <h2 className={style.heading} >Add Questions</h2>
      </form>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel  className={style.box} id="demo-simple-select-label">
          Select Section
        </InputLabel>
        <Select className={style.box}
          
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Select Section"
          onChange={uselect}
        >
          <MenuItem onChange={uvalue1} value="a">
            Section A
          </MenuItem>
          <MenuItem onChange={uvalue2} value="b">
            Section B
          </MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
          className={style.tabs}
          
        >
          <Tabs
            value={value}
            onChange={handleChange}
           
          >
            <Tab label="MCQ" {...Props(0)} />
            <Tab label="Fill In The Blanks" {...Props(1)} />
            <Tab label="Written" {...Props(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Mcq />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Fill />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Written />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default Form;
