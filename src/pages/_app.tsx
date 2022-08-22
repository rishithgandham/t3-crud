// src/pages/_app.tsx
import { withTRPC } from '@trpc/next';
import type { AppRouter } from '../server/router/app.router';
import type { AppType } from 'next/dist/shared/lib/utils';
import superjson from 'superjson';

//styles
import '../styles/globals.css';

//import links
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`;
    const links = [
      loggerLink(),
      httpBatchLink({
        url: url,
        maxBatchSize: 5,
      }),
    ];
    return {
      links,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
