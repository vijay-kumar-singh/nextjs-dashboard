import React from 'react';
import Link from 'next/link'; // Import Link to make AcmeLogo clickable
import AcmeLogo from '@/app/ui/acme-logo';
import SocialMediaLink from '@/app/ui/social-media-link';

const Header = () => {
  return (
    <header className="bg-gray-800 px-6 py-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* AcmeLogo aligned to the left */}
        <div className="inline-flex justify-start">
          <Link href="/" aria-label="Go to home page">
            <AcmeLogo />
          </Link>
        </div>

        {/* SocialMediaLink aligned to the right */}
        <div className="inline-flex justify-end space-x-4">
          <SocialMediaLink />
        </div>
      </div>
    </header>
  );
};

export default Header;
