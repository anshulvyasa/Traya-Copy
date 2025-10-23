export type InputQuestion = {
  questionTitle: string;
  type: "input";
  updateFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
  feild: string;
  value: string;
};

export type Option = {
  id: string;
  value: string;
  optionTitle: string;
};

export type OptionQuestion = {
  questionTitle: string;
  type: "option";
  options: Option[];
  updateFn: (id: string) => void;
};
