"use client";

const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col h-full flex-grow space-y-8 p-5 w-full items-center bg-white rounded-3xl border border-slate-200 shadow-lg">
      <div className="bg-blue-100/30 w-full py-12 flex justify-center items-center rounded-xl">
        {/* Outer ring shadow */}
        {/* Inner white circle with icon */}
        <div className="rounded-full bg-blue-600/5 p-3">
          <div className="relative h-24 w-24 bg-white rounded-full shadow-lg flex justify-center items-center">
            <div className="h-12 w-12 text-blue-500">{icon}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-3 flex-grow pb-3">
        <h2 className="text-xl md:text-3xl font-semibold text-left">{title}</h2>
        <p className="text-lg text-slate-400 text-left">{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
