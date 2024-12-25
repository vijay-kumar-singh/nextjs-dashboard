"use client";

import dynamic from "next/dynamic";

const PortfolioDescription = dynamic(() => import("./PortfolioDescription"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse">
      <div className="h-8 w-3/4 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-8 w-5/6 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-8 w-full bg-gray-300 rounded-md mb-2"></div>
      <div className="h-8 w-2/3 bg-gray-300 rounded-md"></div>
    </div>
  ),
});

export default function PortfolioDescriptionWrapper() {
  return <PortfolioDescription />;
}
