import React, { PropsWithChildren } from 'react';
import Head from '@docusaurus/Head';

const Root: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      {/* Add the banner at the top */}
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9396682749552228"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {children}
    </>
  );
};

export default Root;
