import React, { useEffect, useRef, useState } from 'react';
import GlobalLoader from './GlobalLoader'; // Assuming you already have GlobalLoader component

interface IframeWithLoaderProps {
  url: string;
}

const IframeWithLoader: React.FC<IframeWithLoaderProps> = ({ url }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Set iframe styles
      iframe.style.position = 'fixed';
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      // Remove margin and padding from body element
      document.body.style.margin = '0';
      document.body.style.padding = '0';
    }
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false); // Set loading state to false when iframe content is loaded
  };

  return (
    <>
      <GlobalLoader isLoading={isLoading} />
      <iframe
        ref={iframeRef}
        src={url}
        title="Web Tech Portfolio"
        onLoad={handleIframeLoad} // Attach onLoad directly here
      />
    </>
  );
};

export default IframeWithLoader;
