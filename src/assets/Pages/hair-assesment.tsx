import { useState } from "react";
import AboutYou from "../components/hair-assesment/about-you";
import HairAssesmentHeader from "../components/hair-assesment/hair-assesment-header";
import { StageStatus } from "../components/hair-assesment/stage-status";
import HairHealth from "../components/hair-assesment/hair-health";
import InternalHealth from "../components/hair-assesment/internal-health";

const HairAssesment = () => {
  const [stage, setStage] = useState<
    "about-you" | "hair-health" | "internal-health" | "scalp-assesment"
  >("about-you");
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <HairAssesmentHeader />
      <div className="bg-white grow h-full">
        <StageStatus currStage={stage} />
        {stage === "about-you" && (
          <AboutYou setStage={setStage} index={index} setIndex={setIndex} />
        )}
        {stage === "hair-health" && (
          <HairHealth setStage={setStage} index={index} setIndex={setIndex} />
        )}
        {stage === "internal-health" && (
          <InternalHealth
            setStage={setStage}
            index={index}
            setIndex={setIndex}
          />
        )}
      </div>
    </div>
  );
};

export default HairAssesment;
