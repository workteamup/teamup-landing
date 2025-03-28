"use client";

import WebLayout from "../../components/new-web/layout";
import ButtonExamples from "../../components/new-web/button-examples";

export default function UIComponentsPage() {
  return (
    <WebLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple bg-clip-text text-transparent">
          UI Components
        </h1>

        <p className="text-xl text-center max-w-3xl mx-auto text-gray-graphite mb-16">
          A collection of reusable UI components using the Team Up! brand colors
          and styles.
        </p>

        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-phantom">Buttons</h2>
          <ButtonExamples />
        </div>
      </div>
    </WebLayout>
  );
}
