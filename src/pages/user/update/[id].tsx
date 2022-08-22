import { useRouter } from 'next/router';
import FormItem, { FormItemProps } from '../../../components/FormItem';
import Loading from '../../../components/Loading';
import { useUserMeta } from '../../../hooks/useUserMeta';
import { UpdateUserInput } from '../../../schema/user.schema';
import { trpc } from '../../../utils/trpc';

const UpdateUser = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const update = trpc.useMutation(['users.update-user'], {
    onSuccess: user => router.push(`/user/${user.id}`),
  });

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    jobTitle,
    setJobTitle,
  } = useUserMeta();

  const { data, isLoading } = trpc.useQuery(['users.get-user', { id }]);
  if (isLoading) return <Loading />;
  if (!data) router.push('/users/');

  const handleSubmit = (input: UpdateUserInput) => {
    update.mutate(input);
  };

  const inputs: Array<FormItemProps> = [
    {
      label: 'First Name',
      placeHolder: data?.firstName,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setFirstName(e.currentTarget.value),
      value: firstName,
    },
    {
      label: 'Last Name',
      placeHolder: data?.lastName,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setLastName(e.currentTarget.value),
      value: lastName,
    },
    {
      label: 'Job Title',
      placeHolder: data?.jobTitle,
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setJobTitle(e.currentTarget.value),
      value: jobTitle,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-full bg-cyan-50">
        <div className="text-center bg-white shadow-lg rounded-xl m-10 p-10 md:w-3/4 w-full h-4/5 border-2 border-indigo-500">
          <p className="font-semibold text-2xl text-indigo-500 m-10">
            Update User
          </p>
          <div className="flex justify-center items-center text-center">
            <div className="text-center w-full">
              {inputs.map((input, idx) => (
                <FormItem
                  key={idx}
                  label={input.label}
                  onChange={input.onChange}
                  placeHolder={input.placeHolder}
                  value={input.value}
                />
              ))}
              <button
                className="p-3 font-semibold hover:translate-y-5 hover:scale-110 transition-all bg-indigo-200 rounded-full text-indigo-500"
                disabled={!(firstName && lastName && jobTitle)}
                onClick={() =>
                  handleSubmit({ firstName, id, jobTitle, lastName })
                }
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
