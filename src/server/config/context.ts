// src/server/router/context.ts
import * as trpc from '@trpc/server';
// import * as trpcNext from '@trpc/server/adapters/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../db/client';
import superjson from 'superjson';

interface CtxOpts {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const createContext = async ({ req, res }: CtxOpts) => {
  return { prisma, req, res };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;
export const createRouter = () => trpc.router<Context>().transformer(superjson);
