import Image from "next/image";

export default function InfoElement({
  imageSrc,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {imageSrc && (
        <div className="w-full max-w-[460px] h-[300px] relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}
      <h3
        className={`text-xl lg:text-2xl text-brand-700 font-medium ${
          imageSrc ? "mt-5 lg:mt-12" : ""
        }`}
      >
        {title}
      </h3>
      <p className="mt-1 lg:mt-2 text-smlg:text-base text-dark-space max-w-[460px]">
        {description}
      </p>
    </div>
  );
}
