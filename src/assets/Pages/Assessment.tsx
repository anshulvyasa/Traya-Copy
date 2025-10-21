// src/pages/Assessment.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuestionCard from "../components/QuestionCard";
import ReportPage from "../components/ReportPage";

const Assessment = () => {
  const sections = [
    {
      name: "About You",
      questions: [
        { key: "name", question: "What's your name?", type: "text" },
        { key: "phone", question: "Your phone number?", type: "text" },
        { key: "age", question: "Your age?", type: "number" },
        { key: "gender", question: "Your gender?", type: "select", options: ["Male", "Female", "Other"] },
      ],
    },
    {
      name: "Hair Health",
      questions: [
        { key: "stage", question: "Which image describes your hair loss?", type: "image", options: ["stage1.png","stage2.png","stage3.png","stage4.png","stage5.png","stage6.png","coin.png","heavy.png"] },
        { key: "location", question: "Where is hairfall happening?", type: "select", options: ["Front only", "Top of head", "Both front & top"] },
        { key: "familyHistory", question: "Any family history of hair loss?", type: "select", options: ["Mother side", "Father side", "Both", "None"] },
        { key: "dandruff", question: "Do you have dandruff?", type: "select", options: ["No", "Mild", "Heavy", "Psoriasis / Seborrheic Dermatitis"] },
      ],
    },
    {
      name: "Internal Health",
      questions: [
        { key: "sleep", question: "How well do you sleep?", type: "select", options: ["Peacefully", "Disturbed", "Difficulty falling asleep"] },
        { key: "stress", question: "How stressed are you?", type: "select", options: ["None", "Low", "Moderate", "High"] },
        { key: "constipation", question: "Do you feel constipated?", type: "select", options: ["No", "Sometimes", "Often", "IBS"] },
        { key: "energy", question: "How are your energy levels during the day?", type: "select", options: ["High", "Low in morning", "Low afternoon", "Always low"] },
      ],
    },
  ];

//   const [state, setState] = useState({
//     currentSection: 0,
//     currentQuestionIndex: 0,
//     answers: {
//       name: "",
//       phone: "",
//       age: "",
//       gender: "",
//       stage: "",
//       location: "",
//       familyHistory: "",
//       dandruff: "",
//       sleep: "",
//       stress: "",
//       constipation: "",
//       gas: "",     // Optional — you can remove if unused
//       energy: "",
//       bp: "",       // Optional — you can remove if unused
//     },
//   });

  const [sectionIndex, setSectionIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReport, setShowReport] = useState(false);

  const handleAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    const currentSection = sections[sectionIndex];
    if (questionIndex < currentSection.questions.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else if (sectionIndex < sections.length - 1) {
      setSectionIndex((i) => i + 1);
      setQuestionIndex(0);
    } else {
      setShowReport(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xl p-6">
        <AnimatePresence mode="wait">
          {!showReport ? (
            <motion.div
              key={`${sectionIndex}-${questionIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <QuestionCard
                section={sections[sectionIndex].name}
                question={sections[sectionIndex].questions[questionIndex]}
                onAnswer={handleAnswer}
              />
            </motion.div>
          ) : (
            <ReportPage answers={answers} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Assessment;
