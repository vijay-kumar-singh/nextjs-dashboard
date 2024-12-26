'use client';
import IframeWithLoader from '@components/IframeWithLoader';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-1">
      <div>
        <IframeWithLoader url={"https://web-tech-portfolio-alpha.vercel.app/posts"} />
      </div>
    </main>
  );
}
