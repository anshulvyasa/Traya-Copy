import React from "react";
import { OptionTypeQuestion } from "./option-type-question";
import { useAppDispatch } from "@/lib/redux/hooks";
import { internalHealthQuestionFn } from "@/lib/assesment-question/hair-assesment-question";
import { AnimatePresence } from "framer-motion";
import { MoveLeft } from "lucide-react";

const InternalHealth = ({
  setStage,
  setIndex,
  index,
}: {
  setStage: React.Dispatch<
    React.SetStateAction<
      "about-you" | "hair-health" | "internal-health" | "scalp-assesment"
    >
  >;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}) => {
  const dispatch = useAppDispatch();

  const internalHealthQuestion = internalHealthQuestionFn(dispatch);

  const nextFn = () => {
    if (index < internalHealthQuestion.length - 1) setIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
    else {
      setStage("hair-health");
      setIndex(1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 text-center">
      <div
        className="absolute top-24 sm:top-28 left-5 flex items-center gap-2 font-medium cursor-pointer"
        onClick={handlePrevious}
      >
        <MoveLeft className="h-4 w-4" />
        <span>Previous</span>
      </div>

      <div className="max-w-3xl">
        <AnimatePresence mode="wait">
          <OptionTypeQuestion
            questionTitle={internalHealthQuestion[index].questionTitle}
            options={internalHealthQuestion[index].options}
            updateFn={internalHealthQuestion[index].updateFn}
            nextFn={nextFn}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InternalHealth;
