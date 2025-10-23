import React, { useState } from "react";
import { InputTypeQuestion } from "./input-type-question";
import { OptionTypeQuestion } from "./option-type-question";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { aboutYouQuestionFn } from "@/lib/assesment-question/hair-assesment-question";
import { AnimatePresence } from "framer-motion";
import { useAboutYou } from "@/lib/redux/apphooks/useAboutYou";
import { MoveLeft } from "lucide-react";

const AboutYou = ({
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
  const aboutYouSelector = useAboutYou();

  const aboutYouQuestions = aboutYouQuestionFn(dispatch, aboutYouSelector);

  const nextFn = () => {
    if (index < aboutYouQuestions.length - 1) setIndex((prev) => prev + 1);
    else {
      setStage("hair-health");
      setIndex(0);
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(0, index - 1);
    setIndex(newIndex);
  };

  const gender = useAppSelector((state) => state.aboutYou.gender);
  console.log("Gender is ", gender);

  return (
    <div className="flex justify-center items-center mt-10 text-center">
      {index > 0 && (
        <div
          className="absolute top-24 sm:top-28 left-5 flex items-center gap-2 font-medium cursor-pointer"
          onClick={handlePrevious}
        >
          <MoveLeft className="h-4 w-4" />
          <span>Previous</span>
        </div>
      )}
      <div className="max-w-3xl">
        <AnimatePresence mode="wait">
          {aboutYouQuestions[index].type === "input" ? (
            <InputTypeQuestion
              questionTitle={aboutYouQuestions[index].questionTitle}
              updateFn={aboutYouQuestions[index].updateFn}
              nextFn={nextFn}
              feild={aboutYouQuestions[index].feild}
              value={aboutYouQuestions[index].value}
            />
          ) : (
            <OptionTypeQuestion
              questionTitle={aboutYouQuestions[index].questionTitle}
              options={aboutYouQuestions[index].options}
              updateFn={aboutYouQuestions[index].updateFn}
              nextFn={nextFn}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutYou;
