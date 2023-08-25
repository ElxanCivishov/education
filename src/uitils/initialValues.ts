import { DateRange, localExam } from "./types";

export const initialDateRange: DateRange = {
  startDate: "",
  endDate: "",
};

export const initialLocalExam: localExam = {
  exam: "",
  examScore: 0,
  totalScore: 0,
};

export const inititalAppealItems = [
  {
    title: "Attestat - GPA",
    results: {
      resultOne: "",
    },
  },
  {
    title: "Language test (IELTS TOEFL)",
    results: {
      resultOne: "",
      resultTwo: "",
    },
  },
  {
    title: "GRE/GMAT",
    results: {
      resultOne: "",
    },
  },
  {
    title: "SAT",
    results: {
      resultOne: "",
    },
  },
];
