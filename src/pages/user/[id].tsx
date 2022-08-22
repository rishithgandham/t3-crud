import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';
import Loading from '../../components/Loading';

const SingleUser = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, isLoading } = trpc.useQuery(['users.get-user', { id }]);
  if (isLoading) return <Loading />;
  if (!data) router.push('/users/');

  const goToUsers = () => router.push('/users/');
  const goToUpdate = () => router.push(`/user/update/${data?.id}`);

  return (
    <>
      <div className="flex justify-center items-center h-full bg-cyan-50">
        <div className="text-center bg-white shadow-lg rounded-xl m-10 p-10 md:w-3/4 w-full h-4/5 border-2 border-indigo-500">
          <div className="font-semibold text-2xl text-indigo-500 pt-12 ">
            ({data?.id}){' '}
            <p className="text-gray-400 text-lg">{data?.firstName}</p>
          </div>
          <div className="flex justify-center items-center  text-center">
            <ul className="m-5 text-indigo-700">
              <li>First Name: {data?.firstName}</li>
              <li>Last Name: {data?.lastName}</li>
              <li>Job Title: {data?.jobTitle}</li>
              <li>Id: {data?.id}</li>
            </ul>
          </div>
          <button
            onClick={goToUsers}
            className="p-3 font-semibold hover:translate-y-5 hover:scale-110 transition-all bg-indigo-200 rounded-full text-indigo-500"
          >
            Back to the dashboard
          </button>
          <button
            onClick={goToUpdate}
            className="p-3 ml-10 font-semibold hover:translate-y-5 hover:scale-110 transition-all bg-cyan-200 rounded-full text-cyan-500"
          >
            Update this user
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
