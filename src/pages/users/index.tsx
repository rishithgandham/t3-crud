import { useRouter } from 'next/router';
import ListGroupLi from '../../components/ListGroupLi';
import Loading from '../../components/Loading';
import { trpc } from '../../utils/trpc';

function UserListingPage() {
  const router = useRouter();
  const { data, isLoading, refetch } = trpc.useQuery(['users.get-all']);
  console.log(typeof refetch);

  const goToCreate = () => router.push('/user/new');

  if (isLoading) return <Loading />;
  if (!data) router.push('/');

  return (
    <>
      <div className="flex justify-center items-center h-full bg-cyan-50">
        <div className="text-center bg-white shadow-lg rounded-xl m-10 p-10 md:w-3/4 w-full h-4/5 border-2 border-indigo-500">
          <p className="font-semibold text-2xl text-indigo-500 mb-10">
            User Dashboard
          </p>
          <div className="flex justify-center">
            <ul className="w-full border border-gray-200 rounded-xl">
              {data?.map((user, idx) => (
                <ListGroupLi refetch={refetch} key={idx} user={user} />
              ))}
            </ul>
          </div>
          <button
            onClick={goToCreate}
            className="p-3 py-1 m-10 text-4xl font-semibold  hover:scale-150 transition-all bg-indigo-200 rounded-full text-indigo-500"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default UserListingPage;
