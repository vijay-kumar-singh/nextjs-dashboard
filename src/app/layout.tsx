import '@/src/app/ui/global.css';
import { inter } from '@/src/app/ui/fonts';
import { ThemeContextProvider } from 'src/providers/theme-context-provider';
import CookieConsent from './cookieConsent';
import { HomeThemeSelector } from '../components/home-theme-selector/home-theme-selector';
import Header from '@/src/app/ui/header';
import Footer from '@/src/app/ui/footer';

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
        <div className="flex min-h-screen flex-col">
          <ThemeContextProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <HomeThemeSelector />
            <Footer />
          </ThemeContextProvider>
        </div>
        <CookieConsent /> {/* CookieConsent still remains in the layout */}
      </body>
    </html>
  );
}
