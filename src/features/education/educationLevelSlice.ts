import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateRange, localExam } from "../../uitils/types";

export interface appealExam {
  title: string;
  results: { resultOne: string; resultTwo?: string };
}

interface EducationFirstLevelProps {
  employment: string;
  edu: string;
  schollResult: string;
}

interface EducationSecondLevelProps {
  educationType: string;
  country: string;
  companyName: string;
  profession: string;
  dateRange: DateRange;
  localExam?: localExam;
  appealExam?: appealExam[];
}

interface EducationOlympicsLevelProps {
  subject: string;
  place: string;
  stage: string;
}

interface EducationLevelState {
  educationFirstLevel: EducationFirstLevelProps;
  educationSecondLevel: EducationSecondLevelProps[];
  educationOlympicsLevel: EducationOlympicsLevelProps;
}

const initialState: EducationLevelState = {
  educationFirstLevel: {
    employment: "",
    edu: "",
    schollResult: "",
  },
  educationSecondLevel: [],
  educationOlympicsLevel: {
    subject: "",
    place: "",
    stage: "",
  },
};

const educationLevelSlice = createSlice({
  name: "educationLevel",
  initialState,
  reducers: {
    updateEducationFirstLevel: (
      state,
      action: PayloadAction<Partial<EducationFirstLevelProps>>
    ) => {
      state.educationFirstLevel = {
        ...state.educationFirstLevel,
        ...action.payload,
      };
    },
    addEducation: (state, action: PayloadAction<EducationSecondLevelProps>) => {
      state.educationSecondLevel.push(action.payload);
    },
    updateEducationOlympicsLevel: (
      state,
      action: PayloadAction<Partial<EducationOlympicsLevelProps>>
    ) => {
      state.educationOlympicsLevel = {
        ...state.educationOlympicsLevel,
        ...action.payload,
      };
    },
  },
});

export const {
  updateEducationFirstLevel,
  addEducation,
  updateEducationOlympicsLevel,
} = educationLevelSlice.actions;

export default educationLevelSlice.reducer;
