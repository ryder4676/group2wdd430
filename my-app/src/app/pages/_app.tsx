// pages/_app.tsx
import React from 'react';
import Layout from '@/app/layout';

const MyApp: React.FC<any> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
