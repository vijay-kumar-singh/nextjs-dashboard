'use client';
import Link from 'next/link';
import AcmeLogoSmall from '@/app/ui/acme-logo-small';
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
      <div className="">
          <Link target='_blank'  href="https://drive.google.com/drive/folders/1R79WNCNaCQ_BxjZnFdhbtIqLGmkiV8yE?fbclid=IwAR09BfUTQTtMmph8DhPpw6v4u66uN0QwlsD4v-fnkgeag8MMMsdbGHOY0L8"> PD3 Link</Link>
        </div>
      </div>
    </main>
  );
}
