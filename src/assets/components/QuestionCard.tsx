import React from "react";

interface Question {
  key: string;
  question: string;
  type: string;
  options?: string[];
}

interface QuestionCardProps {
  section: string;
  question: Question;
  onAnswer: (key: string, value: string) => void;
}

const getImgUrl = (name: string) =>
    new URL(`../stagesimg/${name}`, import.meta.url).href;

const QuestionCard: React.FC<QuestionCardProps> = ({ section, question, onAnswer }) => {
  const handleClick = (option: string) => onAnswer(question.key, option);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
      <h2 className="text-gray-500 text-sm mb-2">{section}</h2>
      <h1 className="text-xl font-semibold mb-6">{question.question}</h1>

      {question.type === "text" || question.type === "number" ? (
        <input
          type={question.type}
          className="border rounded-lg p-2 w-2/3 text-center focus:outline-none focus:ring"
          onKeyDown={(e) => e.key === "Enter" && onAnswer(question.key, (e.target as HTMLInputElement).value)}
        />
      ) : question.type === "select" ? (
        <div className="flex flex-col gap-3">
          {question.options?.map((opt) => (
            <button
              key={opt}
              onClick={() => handleClick(opt)}
              className="border rounded-lg py-2 hover:bg-gray-100"
            >
              {opt}
            </button>
          ))}
        </div>
      ) : question.type === "image" ? (
        <div className="grid grid-cols-4 gap-4">
          {question.options?.map((img) => (
            <div key={img} onClick={() => handleClick(img)} className="cursor-pointer hover:scale-105 transition">
              <img src={getImgUrl(img)} alt={img} className="rounded-lg border" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default QuestionCard;
