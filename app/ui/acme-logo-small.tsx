import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogoSmall() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-5 w-8 rotate-[15deg]" />
      <p className="text-[44px]">VJWorld</p>
    </div>
  );
}
