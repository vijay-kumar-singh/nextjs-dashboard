import RevenueChart from '@/src/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/src/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/src/app/ui/fonts';
import { Suspense } from 'react'; 
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/src/app/ui/skeletons';
import CardWrapper from '@/src/app/ui/dashboard/cards';
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard application about customer invoices and revenue details, crafted using cutting-edge technologies including React, Next.js, Postgres, and enhanced with a polished user interface using Tailwind CSS. 
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense> 
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}