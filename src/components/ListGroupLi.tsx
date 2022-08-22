import { User } from '@prisma/client';
import { useRouter } from 'next/router';
import { DeleteUserInput } from '../schema/user.schema';
import { trpc } from '../utils/trpc';

export interface ListGroupLiProps {
  user: User;
  refetch: any;
}

const ListGroupLi = ({
  user: { firstName, jobTitle, lastName, id },
  refetch,
}: ListGroupLiProps) => {
  const router = useRouter();
  const goToUpdate = () => router.push(`/user/update/${id}`);

  const { mutate } = trpc.useMutation('users.delete-user', {
    onSuccess: data => refetch(),
  });

  const handleDelete = () => {
    const input: DeleteUserInput = { id };
    mutate(input);
  };

  return (
    <>
      <li className="h-12 px-2 flex items-center m-0 border-b-2">
        <div className="grid grid-cols-3 w-full">
          <div className="text-start p-2">
            <p className="font-semibold">
              {(firstName + ' ' + lastName).slice(0, 15) ===
              firstName + ' ' + lastName
                ? firstName + ' ' + lastName
                : (firstName + ' ' + lastName).slice(0, 15).concat('...')}
            </p>
          </div>
          <div className="text-center p-2">
            <p className="font-semibold text-slate-500 ">{jobTitle}</p>
          </div>
          <div className="text-center p-2">
            <button
              onClick={goToUpdate}
              className="mx-2 rounded-xl bg-cyan-300 px-2 text-cyan-500 font-semibold"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="rounded-xl bg-red-300 px-2 text-red-500 font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ListGroupLi;
