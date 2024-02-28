import AcmeLogo from '@/app/ui/acme-logo';
import Card from '@/app/ui/card';
import SocialMediaLink from '@/app/ui/social-media-link';
import Header from '@/app/ui/header';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
    <Header/>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to VJWorld.</strong> I am Vijay Singh, a Frontend
            Technology Specialist for a Digital Transformation Program,
            responsible for solution design, architecture, development, and
            delivery with over 10 years of experience working with
            next-generation Web Applications technologies (React, Next.js) for
            large enterprise clients in various industries including Insurance,
            Travel (Aviation), Finance, and E-commerce.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Card />
        </div>
      </div>
      <p>https://1drv.ms/f/s!Aj1dudzNcFBxj-5FpgzJb1u_xxG40w?e=qhyNJg</p>
    </main>
    
  );
}
