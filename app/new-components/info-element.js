import Image from "next/image";

export default function InfoElement({
  imageSrc,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-full max-w-[460px] h-[300px] relative">
        <Image
          src={imageSrc || "/images/placeholder.jpg"} // Use your placeholder image path
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="mt-12 text-2xl text-brand-700">{title}</h3>
      <p className="mt-2 text-base text-dark-space max-w-[460px]">
        {description}
      </p>
    </div>
  );
}
