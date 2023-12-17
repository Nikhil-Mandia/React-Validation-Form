import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { createSvgIcon } from "@mui/material/utils";
// import written from "../written.module.css";
import { useFormik } from "formik";
import { writtenSchema } from "../Schema/writtens";
import { useDispatch, useSelector } from "react-redux";
import { selectTime, typeQuestion } from "../Redux/WrittenRedux/rootSlice";
import written from "../written.module.css";

let initialValues = {
  question: "",
  time: "",
};

const Written = () => {
  let dispatch = useDispatch();
  let question = useSelector((state) => state.custom.question);
  let time = useSelector((state) => state.custom.time);

  // console.log(time);
  console.log("question ", question, time);
  let newinitialValues = {
    ...initialValues,
    question: question ? question : "",
    time: time ? time : "",
  };
  let formik = useFormik({
    initialValues: newinitialValues,
    validationSchema: writtenSchema,
    onSubmit: (values) => {
      // console.log(formik.values);
      dispatch(typeQuestion(values.question));
      // console.log(question);
      dispatch(selectTime(values.time));
      // console.log(time);
    },
  });

  const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      written="none"
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
    <div className={written.tbtn}>
      <div >
        <Button variant="contained">
          ADD QUESTION <PlusIcon />{" "}
        </Button>
      </div>
      <form action=""  className={written.form}  onSubmit={formik.handleSubmit}>
        <fieldset className={written.fieldset} >
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
                  // onKeyDown={data}

                  id="question"
                  label="Add Question"
                  placeholder="Add Question"
                  multiline
                  rows={4}
                  {...formik.getFieldProps("question")}
                  error={formik.touched.question && formik.errors.question}
                  helperText={formik.touched.question && formik.errors.question}
                  name="question"
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
                <div  className={written.div} >
                  <TextField
                    required
                    id="time"
                    label="Time in Minute"
                    placeholder="Time in Minute"
                    {...formik.getFieldProps("time")}
                    name="time"
                    error={formik.touched.time && formik.errors.time}
                    helperText={formik.touched.time && formik.errors.time}
                  />
                </div>
              </Box>
            </div>
          </div>
        </fieldset>
        <div  className={written.btn}>
          <Button variant="contained" type="submit">
            ADD QUESTION
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Written;
