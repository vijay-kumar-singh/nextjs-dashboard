import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import CookieConsent from './cookieConsent';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} antialiased`}>
        {/* Using flexbox to position Header, Main content and Footer */}
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow">{children}</main> {/* This grows to take up space */}
          
          <Footer /> {/* Always positioned at the bottom of the screen */}
        </div>
        <CookieConsent /> {/* CookieConsent still remains in the layout */}
      </body>
    </html>
  );
}
