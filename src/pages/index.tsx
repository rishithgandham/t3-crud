import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const goToUsers = () => router.push('/users/');

  return (
    <>
      <div className="flex justify-center items-center h-full bg-cyan-50">
        <div className="bg-white rounded-xl md:w-1/2 w-full h-2/3 text-center p-10  border-2 border-indigo-700">
          <div className="text-cyan-500 font-semibold text-2xl mt-11 ">
            Welcome to the <p className="text-indigo-500">t3 user dashboard.</p>
          </div>
          <div className="h-1/2 flex items-end justify-center m-10 ">
            <button
              className="p-3 font-semibold hover:translate-y-5 hover:scale-110 transition-all bg-indigo-200 rounded-full text-indigo-500"
              onClick={goToUsers}
            >
              Open the dashboard!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
