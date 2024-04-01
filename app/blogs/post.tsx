import React, { useEffect, useRef, useState } from 'react';

interface IframeProps {
  url: string;
}

const PostsIframe: React.FC<IframeProps> = ({ url }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Set full-screen styles for the iframe element and parent container
      iframe.style.position = 'fixed';

      iframe.style.width = '100%';
      iframe.style.height = '100%';
      if (iframe.onload) {
        iframe.onload = () => {
          console.log('ad');
          setIsLoading(false);
        };
      }

      // Remove margin and padding from body element
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      const timeoutId = setTimeout(() => setIsLoading(false), 5000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <p></p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={url}
        title="Web Tech Portfolio"
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        }}
      />
    </>
  );
};

export default PostsIframe;
