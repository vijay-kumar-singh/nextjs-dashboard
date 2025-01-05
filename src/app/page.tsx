import '../styles/globals.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import PortfolioDescriptionWrapper from '../components/PortfolioDescriptionWrapper';


export const revalidate = 0; // Disable caching for fresh data

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store', // Disable caching for this specific fetch
  });
  const data = await response.json();
  return data;
}

// Main Page Component
export default async function Page() {
  const data = await fetchData();

  return (
    <main className="flex min-h-screen flex-col px-6 py-12">
      <div className="mt-8 flex flex-col gap-6">
        {/* Dynamically Imported Portfolio Description */}
        <div className="mb-8">
          <PortfolioDescriptionWrapper />
        </div>

        {/* Portfolio Links Section */}
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-5 rounded-xl bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] px-10 py-5 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-6" />
          </Link>
          <Link
            href="/dummy" as="https://lib-management-phi.vercel.app"
            className="flex items-center justify-center gap-5 rounded-xl bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] px-10 py-5 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span>AI Powered App</span> <ArrowRightIcon className="w-6" />
          </Link>
          {/* <Link
            href="/blogs"
            className="flex items-center justify-center gap-5 rounded-xl bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] px-10 py-5 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span>Blogs</span> <ArrowRightIcon className="w-6" />
          </Link>
          <Link
            href="/netlify"
            className="flex items-center justify-center gap-5 rounded-xl bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] px-10 py-5 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            <span>Netlify Site</span> <ArrowRightIcon className="w-6" />
          </Link> */}
          
        </div>
       
      </div>
    </main>
  );
}
