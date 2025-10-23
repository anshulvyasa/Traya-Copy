import { hairHealthQuestionFn } from "@/lib/assesment-question/hair-assesment-question";
import { useAppDispatch } from "@/lib/redux/hooks";
import { AnimatePresence } from "framer-motion";
import { MoveLeft } from "lucide-react";
import { OptionTypeQuestion } from "./option-type-question";

const HairHealth = ({
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

  const hairHealthQuestion = hairHealthQuestionFn(dispatch);

  const nextFn = () => {
    if (index < hairHealthQuestion.length - 1) setIndex((prev) => prev + 1);
    else {
      setStage("internal-health");
      setIndex(0);
    }
  };

  const handlePrevious = () => {
    if (index > 0) setIndex(index - 1);
    else {
      setStage("about-you");
      setIndex(3);
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
          {
            <OptionTypeQuestion
              questionTitle={hairHealthQuestion[index].questionTitle}
              options={hairHealthQuestion[index].options}
              updateFn={hairHealthQuestion[index].updateFn}
              nextFn={nextFn}
            />
          }
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HairHealth;
