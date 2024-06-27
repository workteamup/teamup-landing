"use client";

const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col flex-grow space-y-6 py-12 m-3 w-full items-center px-6 hover:shadow-2xl rounded-xl hover:border hover:border-slate-200">
      <div className="h-20 w-20 bg-blue-50 border border-blue-100 rounded-2xl text-blue-500 flex justify-center items-center">
        <div className="h-8 w-8">{icon}</div>
      </div>
      <div className="flex flex-col space-y-2">
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          {title}
        </h2>
        <p className="text-base text-slate-400 text-center grow">{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
