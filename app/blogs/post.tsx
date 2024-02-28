import React, { useEffect, useRef } from 'react';

interface IframeProps {
  url: string;
}

const PostsIframe: React.FC<IframeProps> = ({ url }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Set full-screen styles for the iframe element and parent container
      iframe.style.position = 'fixed';
      
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      // Remove margin and padding from body element
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={url}
      title="Web Tech Portfolio"
    />
  );
};

export default PostsIframe;