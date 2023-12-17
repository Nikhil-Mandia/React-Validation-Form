import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { createSvgIcon } from "@mui/material/utils";
import fill from "../fill.module.css";
import { useFormik } from "formik";
import { fillschema } from "../Schema/fills";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTimef,
  typeAnswerf,
  typeQuestionf,
} from "../Redux/WrittenRedux/rootSlice";

let initialValues = {
  questionf: "",
  answerf: "",
  timef: "",
};

const Fill = () => {
  let dispatch = useDispatch();
  let questionf = useSelector((state) => state.custom.questionf);
  let timef = useSelector((state) => state.custom.timef);
  let answerf = useSelector((state) => state.custom.answerf);

  let newinitialValues = {
    ...initialValues,
    questionf: questionf ? questionf : "",
    timef: timef ? timef : "",
    answerf: answerf ? answerf : "",
  };

  let formik = useFormik({
    initialValues: newinitialValues,
    validationSchema: fillschema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(typeQuestionf(values.questionf));
      dispatch(typeAnswerf(values.answerf));
      dispatch(selectTimef(values.timef));
    },
  });

  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>,
    "Plus"
  );
  return (
    <div>
      <div  className={fill.tbtn}>
        <Button variant="contained">
          ADD QUESTION <PlusIcon />{" "}
        </Button>
      </div>
      <form action="" onSubmit={formik.handleSubmit} className={fill.form}>
        <fieldset className={fill.fieldset} >
          <legend>Question 1</legend>
          <div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "98%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="questionf"
                  label="Add Question"
                  placeholder="Add Question"
                  multiline
                  rows={4}
                  {...formik.getFieldProps("questionf")}
                  error={formik.touched.questionf && formik.errors.questionf}
                  helperText={
                    formik.touched.questionf && formik.errors.questionf
                  }
                  name="questionf"
                />
              </div>
            </Box>
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className={fill.div} >
                  <TextField
                    required
                    id="answerf"
                    label="Add Answer"
                    placeholder="Add Answer"
                    {...formik.getFieldProps("answerf")}
                    error={formik.touched.answerf && formik.errors.answerf}
                    helperText={formik.touched.answerf && formik.errors.answerf}
                    name="answerf"
                  />
                </div>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <div  className={fill.div}>
                  <TextField
                    required
                    id="timef"
                    label="Time in Minute"
                    placeholder="Time in Minute"
                    {...formik.getFieldProps("timef")}
                    error={formik.touched.timef && formik.errors.timef}
                    helperText={formik.touched.timef && formik.errors.timef}
                    name="timef"
                  />
                </div>
              </Box>
            </div>
          </div>
        </fieldset>
        <div className={fill.btn} >
          <Button variant="contained" type="submit">
            ADD QUESTION
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Fill;
