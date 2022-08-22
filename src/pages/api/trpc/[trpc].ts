// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/router/app.router';
import { createContext } from '../../../server/config/context';
import { TRPCError } from '@trpc/server';

export function errorHandler({ error }: { error: TRPCError }) {
  if (error.code === 'INTERNAL_SERVER_ERROR') console.error(error);
  else console.log({ error });
}

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError: errorHandler,
});
