import React from "react";
import Navbar from "./new-components/navbar";

const NavbarPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-[88px] p-8">
        <h1 className="text-2xl font-bold">Navbar Demo Page</h1>
        <p className="mt-4">Scroll down to see the sticky navbar in action.</p>
        <div className="h-[200vh]"></div>
      </div>
    </div>
  );
};

export default NavbarPage; 