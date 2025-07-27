import React from "react";

const AIRecommendations = () => {
  return (
    <div className="relarive w-full max-w-md mx-auto rounded-2xl bg-[#181818]/90 shadow-2xl border border-[#333333] px-8 py-10 mt-4 flex flex-col items-center min-h-[480px]">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-white tracking-tight drop-shadow-lg">
        AI Movie Recommendations
      </h2>
      <div className="w-full flex items-center mb-8">
        <div className="flex-1 h-2 bg-[#232323] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#e50914] transition-all duration-300"
            style={{ width: "50%" }}
          ></div>
        </div>
        <span className="ml-4 text-white text-sm font-semibold">2/5</span>
      </div>
      <div className="w-full flex flex-col flex-1">
        <div className="mb-6 flex-1">
          <h3 className="text-white text-lg font-semibold mb-6 text-center">
            What is your preferred genre?
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <button className="w-full py-3 rounded-xl border-2 transition font-semibold text-base flex items-center justify-center gap-2 shadow-lg bg-[#e50914] border-[#e50914] text-white ">
              Option 1
            </button>
            <button className="w-full py-3 rounded-xl border-2 border-[#333333] bg-[#232323] text-white shadow-lg">
              Option 2
            </button>
            <button className="w-full py-3 rounded-xl border-2">
              Option 3
            </button>
            <button className="w-full py-3 rounded-xl border-2">
              Option 4
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendations;
