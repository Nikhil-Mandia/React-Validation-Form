import * as Yup from "yup";
export const writtenSchema = Yup.object({
  question: Yup.string(1).min(1).max(50).required("Add Question is required"),
  time: Yup.number().min(1).max(60).required("Time is required"),
});
