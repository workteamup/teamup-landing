"use client";

import dynamic from "next/dynamic";

// Dynamically import the DesignSystem component
const DesignSystem = dynamic(() => import("../components/design-system"), {
  loading: () => (
    <div className="p-8 text-center">Loading design system...</div>
  ),
});

export default function DesignSystemPage() {
  return <DesignSystem />;
}
