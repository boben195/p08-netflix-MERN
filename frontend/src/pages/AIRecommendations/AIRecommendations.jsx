import React from "react";
import { useState } from "react";

const steps = [
  {
    name: "genre",
    label: "What's your favorite genre?",
    options: [
      "Action",
      "Comedy",
      "Drama",
      "Horror",
      "Romance",
      "Sci-Fi",
      "Animation",
    ],
  },
  {
    name: "mood",
    label: "What's your current mood?",
    options: [
      "Excited",
      "Relaxed",
      "Thoughtful",
      "Scared",
      "Inspired",
      "Romantic",
    ],
  },
  {
    name: "decade",
    label: "Preferred decade?",
    options: ["2020s", "2010s", "2000s", "1990s", "Older"],
  },
  {
    name: "language",
    label: "Preferred language?",
    options: ["English", "Korean", "Spanish", "French", "Other"],
  },
  {
    name: "length",
    label: "Preferred movie length?",
    options: ["Short (<90 min)", "Standard (90-120 min)", "Long (>120 min)"],
  },
];

const initialState = steps.reduce((acc, step) => {
  acc[step.name] = "";
  return acc;
}, {});

const AIRecommendations = () => {
  const [inputs, setInputs] = useState(initialState);
  const [step, setStep] = useState(0);

  const handleOption = (value) => {
    setInputs({ ...inputs, [steps[step].name]: value });
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      console.log(inputs);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#181818] via-[#232323] to-[#181818] relative overflow-hidden">
      <img
        src="/background_banner.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[2px]"
        alt="banner for background"
      />
      <div className="relative w-full max-w-md mx-auto rounded-2xl bg-[#232323]/90 shadow-2xl border border-[#333333] px-8 py-10 mt-4 flex flex-col items-center min-h-[480px]">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-white tracking-tight drop-shadow-lg">
          AI Movie Recommendations
        </h2>
        <div className="w-full flex items-center mb-8">
          <div className="flex-1 h-2 bg-[#232323] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#e50914] transition-all duration-300"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <span className="ml-4 text-white text-sm font-semibold">
            {step + 1}/{steps.length}
          </span>
        </div>
        <div className="w-full flex flex-col flex-1">
          <div className="mb-6 flex-1">
            <h3 className="text-white text-lg font-semibold mb-6 text-center">
              {steps[step].label}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {steps[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className={`w-full py-3 rounded-xl border-2 transition font-semibold
                   text-base flex items-center justify-center gap-2 focus:outline-none focus:ring-2 active:scale-95 duration-150 focus:ring-[#e50914] shadow-sm ${
                     inputs[steps[step].name] == opt
                       ? "bg-[#e50914] border-[#e50914] text-white shadow-lg"
                       : "bg-#[232323] border-[#444] text-white hover:bg-[#e50914]/80 hover:border-[#e50914]"
                   }`}
                >
                  {opt}
                </button>
              ))}
              {/* <button className="w-full py-3 rounded-xl border-2 border-[#333333] bg-[#232323] text-white shadow-lg">
                Option 2
              </button>
              <button className="w-full py-3 rounded-xl border-2">
                Option 3
              </button>
              <button className="w-full py-3 rounded-xl border-2">
                Option 4
              </button> */}
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2 rounded-lg font-semibold transition border-2 border-[#444] text-white bg-[#181818] hover:bg-[#232323]"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 rounded-lg font-semibold transition border-2 border-[#e50914] text-white bg-[#e50914] hover:bg-[#b0060f] ml-2"
            >
              {step < steps.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;
