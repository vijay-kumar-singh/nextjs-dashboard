import Card from '@/app/ui/card';
import Header from '@/app/ui/header';
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
    <main className="flex min-h-screen flex-col p-6">
      <div className="mb-4 text-lg font-bold">Fetched Title: {data.title}</div>
      <Header />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            Welcome to the portfolio of Vijay Singh — a Web Technology Specialist with over 10 years of expertise in solution design, architecture, development, and delivery of next-generation web applications. I am passionate about leveraging advanced technologies like React and Next.js to craft scalable and efficient solutions that empower businesses in their digital transformation journey. Throughout my career, I’ve partnered with leading enterprise clients across diverse industries, including Insurance, Travel (Aviation), Finance, and E-commerce. This breadth of experience has equipped me with a deep understanding of varied business challenges and how innovative web technologies can address them effectively. Let’s connect to explore opportunities for collaboration or discuss how my expertise can help bring your vision to life.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/blogs"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Blogs</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/netlify"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Netlify site</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Card />
        </div>
      </div>
    </main>
  );
}
