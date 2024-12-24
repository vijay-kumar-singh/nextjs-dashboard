import '../styles/globals.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export const revalidate = 0; // Disable caching for fresh data

async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store', // Disable caching for this specific fetch
  });
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchData();

  return (
    <main className="flex min-h-screen flex-col bg-gray-100 px-6 py-12">
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-8 py-12">
          <p className={`${lusitana.className} text-transparent bg-clip-text bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] text-xl md:text-3xl md:leading-normal`}>
            Welcome to the portfolio of Vijay Singh — a Web Technology Specialist with over 10 years of expertise in solution design, architecture, development, and delivery of next-generation web applications. I am passionate about leveraging advanced technologies like React and Next.js to craft scalable and efficient solutions that empower businesses in their digital transformation journey. Throughout my career, I’ve partnered with leading enterprise clients across diverse industries, including Insurance, Travel (Aviation), Finance, and E-commerce. This breadth of experience has equipped me with a deep understanding of varied business challenges and how innovative web technologies can address them effectively. Let’s connect to explore opportunities for collaboration or discuss how my expertise can help bring your vision to life.
          </p>
        </div>

        {/* Portfolio Links Section */}
        <div className="flex flex-col gap-6 md:flex-row justify-center">
          <Link
            href="/dashboard"
            className="flex items-center gap-5 justify-center rounded-xl bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] px-10 py-5 text-lg font-medium text-white transition-all duration-300 hover:scale-105 focus:outline-none shadow-lg"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-6" />
          </Link>
          <Link
            href="/blogs"
            className="flex items-center gap-5 justify-center rounded-xl bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] px-10 py-5 text-lg font-medium text-white transition-all duration-300 hover:scale-105 focus:outline-none shadow-lg"
          >
            <span>Blogs</span> <ArrowRightIcon className="w-6" />
          </Link>
          <Link
            href="/netlify"
            className="flex items-center gap-5 justify-center rounded-xl bg-gradient-to-r from-[#4b6cb7] via-[#4b6cb7] to-[#182848] px-10 py-5 text-lg font-medium text-white transition-all duration-300 hover:scale-105 focus:outline-none shadow-lg"
          >
            <span>Netlify Site</span> <ArrowRightIcon className="w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
