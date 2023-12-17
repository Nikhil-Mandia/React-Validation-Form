import * as Yup from "yup";
export const fillschema = Yup.object({
  question: Yup.string().min(1).max(50).required("Question is required"),
  answer: Yup.string().min(1).max(50).required("Answer is required"),
  time: Yup.string().min(1).max(60).required("Time is required"),
});
