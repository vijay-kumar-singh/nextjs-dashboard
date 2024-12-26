import React from 'react';
import Link from 'next/link';
export default function Card() {
  return (
    <Link
      className="flex flex-col items-center justify-between py-4 px-4 border border-gray-400 rounded-lg"
      href="/dashboard"
    >
      <img
        className="h-48 w-full object-cover"
        src={'/invoice_portal.png'}
        alt=""
      />
      <div className="text-center font-medium text-lg text-gray-800">customer invoice dashboard</div>
    </Link>
  );
};