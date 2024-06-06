"use client";

import Button from "./button";
import Footer from "./footer";
import UnknownIcon from "./icons/unknown-icon";
import Link from "./link";

const arrowIconPath =
  "M13.5 8.5C13.7761 8.5 14 8.27614 14 8C14 7.72386 13.7761 7.5 13.5 7.5L3.80298 7.5L7.83448 3.87165C8.03974 3.68692 8.05638 3.37078 7.87165 3.16552C7.68692 2.96027 7.37077 2.94363 7.16552 3.12836L2.16552 7.62835C2.06016 7.72317 2 7.85826 2 8C2 8.14174 2.06016 8.27683 2.16552 8.37165L7.16552 12.8716C7.37077 13.0564 7.68692 13.0397 7.87165 12.8345C8.05638 12.6292 8.03974 12.3131 7.83448 12.1283L3.80298 8.5L13.5 8.5Z";

const LegalPageTemplate = ({ title, children }) => {
  return (
    <div className="">
      <div className="bg-blue-950 text-white">
        <div className="max-w-[960px] w-full px-4 md:px-6 mx-auto pt-6">
          <Link
            iconLeft={
              <UnknownIcon width="16" height="16" path={arrowIconPath} />
            }
            className="text-white"
            href="/"
          >
            Volver
          </Link>
        </div>

        <h1 className="pt-20 pb-16 md:pt-36 md:pb-24 font-semibold text-4xl md:text-6xl max-w-[960px] w-full m-auto px-4 md:px-6">
          {title}
        </h1>
      </div>

      <div className="mb-20">
        <div className="pt-8 max-w-[960px] m-auto text-slate-500 w-full px-4 md:px-6">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalPageTemplate;
