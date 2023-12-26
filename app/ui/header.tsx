import React from 'react';
import AcmeLogo from '@/app/ui/acme-logo';
import SocialMediaLink from '@/app/ui/social-media-link';
export default function Header() {
  return (
    <>
      <div className="flex h-20 items-center justify-between rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        <SocialMediaLink />
      </div>
    </>
  );
}
