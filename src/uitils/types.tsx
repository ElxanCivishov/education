export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface localExam {
  exam: string;
  examScore: number;
  totalScore: number;
}

export interface appealExamProps {
  title: string;
  results: {
    resultOne: string;
    resultTwo?: string;
  };
}
