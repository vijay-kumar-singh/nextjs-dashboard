import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/src/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-8 w-8 rotate-[15deg]" />
      <p className="text-[25px]">Vijay Singh</p>
    </div>
  );
}
