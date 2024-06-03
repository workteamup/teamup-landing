"use client";

const BenefitCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col space-y-6 pt-12 pb-6 m-3 w-full sm:w-[400px] items-center px-6 hover:shadow-lg rounded-xl hover:border hover:border-slate-200">
      <div className="h-16 w-16 bg-indigo-100 rounded-2xl">{icon}</div>
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-semibold text-center text-blue-700">
          {title}
        </h2>
        <p className="text-base text-slate-400 text-center">{text}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
