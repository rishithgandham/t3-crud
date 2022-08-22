import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const users = trpc.useQuery(['users.get-all']);

  return <>hello</>;
};

export default Home;
