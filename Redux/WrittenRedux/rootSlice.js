import { createSlice } from "@reduxjs/toolkit";
let rootSlice = createSlice({
  name: "root",
  initialState: {
    question: " ",
    questionm: " ",
    questionf: " ",
    time: "",
    timef: "",
    timem: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    marks: "",
    answer: "",
    answerf: "",
  },
  reducers: {
    typeQuestion: (state, action) => {
      state.question = action.payload;
    },
    typeQuestionm: (state, action) => {
      state.questionm = action.payload;
    },
    typeQuestionf: (state, action) => {
      state.questionf = action.payload;
    },
    selectTime: (state, action) => {
      state.time = action.payload;
    },
    selectTimem: (state, action) => {
      state.timem = action.payload;
    },
    selectTimef: (state, action) => {
      state.timef = action.payload;
    },

    selectOption1: (state, action) => {
      state.option1 = action.payload;
    },
    selectOption2: (state, action) => {
      state.option2 = action.payload;
    },
    selectOption3: (state, action) => {
      state.option3 = action.payload;
    },
    selectOption4: (state, action) => {
      state.option4 = action.payload;
    },
    selectMarks: (state, action) => {
      state.marks = action.payload;
    },
    typeAnswer: (state, action) => {
      state.answer = action.payload;
    },
    typeAnswerf: (state, action) => {
      state.answerf = action.payload;
    },
  },
});
export const reducer = rootSlice.reducer;
export const {
  typeQuestionm,
  typeQuestion,
  selectTime,
  selectTimem,
  selectMarks,
  selectOption1,
  selectOption2,
  selectOption3,
  selectOption4,
  typeAnswer,
  typeQuestionf,
  selectTimef,
  typeAnswerf,
} = rootSlice.actions;

// export const Message = createSlice({
//   name: "message",
//   initialState: initialState,
//   reducers: {
//     // formData: (state, action) => {
//     //   console.log("state----> ", state);
//     //   //   state.question = action.payload?.question;
//     //   //   state.time = action.payload?.time;
//     // },
//   },
// });
// export const { formData } = Message.actions;

// export default Message.reducer;
