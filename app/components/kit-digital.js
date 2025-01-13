"use client";

import Image from "next/image";
import Button from "./button";
import { cn } from "../lib/utils";

const KitDigital = ({ className }) => {
  return (
    <div className={cn("mt-16", className)}>
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10 mb-24">
        {/* Text content */}
        <div className="space-y-4 flex flex-col items-center">
          <h3 className="text-2xl md:text-4xl font-semibold text-blue-950">
            Consigue Team Up! gratis con Kit Digital
          </h3>
          <p className="text-slate-400 text-lg md:text-xl mb-16">
            ¡Consigue hasta 29.000 € para digitalizar tu empresa con la solución
            de oficina virtual más innovadora!
          </p>
        </div>
        <Button
          variant="primary"
          size="lg"
          onClick={() => (window.location.href = "mailto:ignacio@teamup.works")}
        >
          Quiero saber más
        </Button>
      </div>

      {/* Image */}
      <div className="w-full">
        <Image
          src="/images/logos-kit-digital.png"
          alt="Kit Digital Logo"
          width={200}
          height={100}
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};

export default KitDigital;
