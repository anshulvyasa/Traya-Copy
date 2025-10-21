import React from "react";

interface Answers {
  name?: string;
  phone?: string;
  age?: string;
  gender?: string;
  stage?: string;
  location?: string;
  familyHistory?: string;
  dandruff?: string;
  sleep?: string;
  stress?: string;
  constipation?: string;
  gas?: string;
  energy?: string;
  bp?: string;
  recommended?: string; // add this field
}

interface ReportPageProps {
  answers: Answers;
}

const ReportPage: React.FC<ReportPageProps> = ({ answers }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">Assessment Report</h2>
      <p className="text-gray-500 mb-4">{answers.name}, You are currently on</p>
      <h3 className="text-xl font-semibold mb-2">
        Stage {answers.stage} of Male Pattern Hair Fall
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Start seeing results in <b>5 months</b>
      </p>

      <div className="w-full bg-gray-200 h-3 rounded-full mb-4">
        <div className="bg-green-500 h-3 rounded-full w-[93%]"></div>
      </div>
      <p className="text-green-700 font-medium mb-6">
        Hair Regrowth Possibility 93%
      </p>

      <div className="text-left bg-green-50 p-4 rounded-lg mb-4 text-gray-700">
        Stage {answers.stage} hair fall is caused by internal hormone attack on follicles.  
        Most follicles are still active — great time to begin treatment.
      </div>

      <h3 className="font-semibold mt-6 mb-3">Your Hairfall Root Causes</h3>
      <div className="flex justify-center gap-3">
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Dandruff</span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Nutrition</span>
        <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Lifestyle</span>
      </div>

      {/* Recommended Treatment Section */}
      <h3 className="font-semibold mt-6 mb-3">Recommended Treatment</h3>
      <div className="bg-green-100 p-4 rounded-lg text-green-800 mb-4">
        <p>
          Based on your assessment, the most suitable treatment(s) for you are: 
          <b> {answers.recommended || "Personalized PRP Treatment"}</b>.
        </p>
      </div>

      <div className="mt-8">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ReportPage;
