'use client';
import Link from 'next/link';
import AcmeLogoSmall from '@/app/ui/acme-logo-small';
import PostsIframe from './post';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-1">
      <div className="w-full flex-none md:w-64">
      <Link
        className="mb-2 flex h-10 items-end justify-start rounded-md bg-blue-600 p-4 md:h-20"
        href="/"
      >
        <div>
          <AcmeLogoSmall />
        </div>
      </Link>
      </div>
      <div>
        <PostsIframe url="https://neon-moxie-077f6f.netlify.app/" />
      </div>
    </main>
  );
}
