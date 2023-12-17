import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import mcq from "../mcq.module.css";
import { createSvgIcon } from "@mui/material/utils";
import { useFormik } from "formik";
import { mcqSchema } from "../Schema/mcqs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectMarks,
  selectOption1,
  selectOption2,
  selectOption3,
  selectOption4,
  selectTimem,
  typeAnswer,
  typeQuestionm,
} from "../Redux/WrittenRedux/rootSlice";
const initialvalues = {
  questionm: "",
  option1: "",
  option2: "",
  option3: "",
  option4: "",
  timem: "",
  marks: "",
  answer: "",
};

const Mcq = () => {
  let dispatch = useDispatch();
  let questionm = useSelector((state) => state.custom.questionm);
  let option1 = useSelector((state) => state.custom.option1);
  let option2 = useSelector((state) => state.custom.option2);
  let option3 = useSelector((state) => state.custom.option3);
  let option4 = useSelector((state) => state.custom.option4);
  let timem = useSelector((state) => state.custom.timem);
  let marks = useSelector((state) => state.custom.marks);
  let answer = useSelector((state) => state.custom.answer);

  let newinitialValues = {
    ...initialvalues,
    questionm: questionm ? questionm : "",
    option1: option1 ? option1 : "",
    option2: option2 ? option2 : "",
    option3: option3 ? option3 : "",
    option4: option4 ? option4 : "",
    timem: timem ? timem : "",
    marks: marks ? marks : "",
    answer: answer ? answer : "",
  };

  const formik = useFormik({
    initialValues: newinitialValues,
    validationSchema: mcqSchema,
    onSubmit: (values) => {
      console.log("testing", formik.values);
      dispatch(typeQuestionm(values.questionm));
      dispatch(selectOption1(values.option1));
      dispatch(selectOption2(values.option2));
      dispatch(selectOption3(values.option3));
      dispatch(selectOption4(values.option4));
      dispatch(selectTimem(values.timem));
      dispatch(typeAnswer(values.answer));
      dispatch(selectMarks(values.marks));
    },
  });

  // let submit = () => {
  //   console.log(values);
  // };

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
      <div  className={mcq.tbtn}>
        <Button variant="contained">
          ADD QUESTION <PlusIcon />{" "}
        </Button>
      </div>
      <form action="" className={mcq.form} onSubmit={formik.handleSubmit} >
        <fieldset className={mcq.fieldset}>
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
                  id="questionm"
                  name="questionm"
                  label="Question"
                  placeholder="Add Question"
                  multiline
                  rows={4}
                  {...formik.getFieldProps("questionm")}
                  error={formik.touched.questionm && formik.errors.questionm}
                  helperText={
                    formik.touched.questionm && formik.errors.questionm
                  }
                />
              </div>
            </Box>
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50%" },
                }}
                noValidate
                autoComplete="off"
              >
                <div  className={mcq.div}>
                  <TextField
                    required
                    id="option1"
                    label="Option 1"
                    placeholder="Option 1"
                    name="option1"
                    {...formik.getFieldProps("option1")}
                    error={formik.touched.option1 && formik.errors.option1}
                    helperText={formik.touched.option1 && formik.errors.option1}
                  />

                  <TextField
                    required
                    id="option2"
                    label="Option 2"
                    placeholder="Option 2"
                    name="option2"
                    {...formik.getFieldProps("option2")}
                    error={formik.touched.option2 && formik.errors.option2}
                    helperText={formik.touched.option2 && formik.errors.option2}
                  />
                </div>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50%" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className={mcq.div} >
                  <TextField
                    required
                    id="option3"
                    label="Option 3"
                    placeholder="Option 3"
                    name="option3"
                    {...formik.getFieldProps("option3")}
                    error={formik.touched.option3 && formik.errors.option3}
                    helperText={formik.touched.option3 && formik.errors.option3}
                  />
                  <TextField
                    required
                    id="option4"
                    label="Option 4"
                    placeholder="Option 4"
                    name="option4"
                    {...formik.getFieldProps("option4")}
                    error={formik.touched.option4 && formik.errors.option4}
                    helperText={formik.touched.option4 && formik.errors.option4}
                  />
                </div>
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50%" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className={mcq.div} >
                  <TextField
                    required
                    id="timem"
                    label="Time in Minuts"
                    placeholder="Time in Minuts"
                    name="timem"
                    {...formik.getFieldProps("timem")}
                    error={formik.touched.timem && formik.errors.timem}
                    helperText={formik.touched.timem && formik.errors.timem}
                  />
                  <TextField
                    required
                    id="marks"
                    label="Marks"
                    placeholder="Marks"
                    name="marks"
                    {...formik.getFieldProps("marks")}
                    error={formik.touched.marks && formik.errors.marks}
                    helperText={formik.touched.marks && formik.errors.marks}
                  />
                </div>
              </Box>
            </div>
          </div>
          <FormControl sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="demo-simple-select-label">
              Select Section
            </InputLabel>
            <Select
              id="answer"
              {...formik.getFieldProps("answer")}
              label="Select Section"
              name="answer"
            >
              <MenuItem value="a">Section A</MenuItem>
              <MenuItem value="b">Section B</MenuItem>
              <MenuItem value="c">Section C</MenuItem>
              <MenuItem value="d">Section D</MenuItem>
            </Select>
          </FormControl>
        </fieldset>
        <div className={mcq.btn} >
          <Button
            variant="contained"
            type="submit"
            //  onClick={submit}
          >
            ADD QUESTION
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Mcq;
