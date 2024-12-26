'use client';
import IframeWithLoader from '@components/IframeWithLoader';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-1">
      <div>
        <IframeWithLoader url={'https://neon-moxie-077f6f.netlify.app/'} />
      </div>
    </main>
  );
}
