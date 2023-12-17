import * as Yup from "yup";

export const mcqSchema = Yup.object({
  questionm: Yup.string().min(1).max(50).required("Add Question is required"),
  option1: Yup.string().min(1).max(30).required("Option is required"),
  option2: Yup.string().min(1).max(30).required("Option is required"),
  option3: Yup.string().min(1).max(30).required("Option is required"),
  option4: Yup.string().min(1).max(30).required("Option is required"),
  timem: Yup.number().min(1).max(60).required("Time is required"),
});
