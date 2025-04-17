"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "../../contexts/TranslationContext";

export default function SimpleNavbar() {
  const locale = useLocale();

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/${locale}`} className="font-bold text-xl">
          Team Up!
        </Link>

        <div className="flex space-x-4">
          <Link href={`/${locale}/solutions`} className="hover:text-blue-500">
            Solutions
          </Link>
          <Link href={`/${locale}/test`} className="hover:text-blue-500">
            Test Page
          </Link>
        </div>
      </div>
    </nav>
  );
}
