import { User } from '@prisma/client';
import { useRouter } from 'next/router';
import { trpc } from '../../utils/trpc';
import React from 'react';
import FormItem, { FormItemProps } from '../../components/FormItem';
import { CreateUserInput } from '../../schema/user.schema';
import { useUserMeta } from '../../hooks/useUserMeta';

function NewUser() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    jobTitle,
    setJobTitle,
  } = useUserMeta();

  const createOnSuccess = (user: User) => {
    console.log(user);
    router.push(`/user/${user.id}`);
  };

  const router = useRouter();
  const { mutate } = trpc.useMutation(['users.create-user'], {
    onSuccess: createOnSuccess,
    onError: err => {
      console.log(err);
      router.push('/users/');
    },
  });

  const handleSubmit = (input: CreateUserInput) => {
    mutate(input);
  };

  const inputs: Array<FormItemProps> = [
    {
      label: 'First Name',
      placeHolder: 'Enter the users first name',
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setFirstName(e.currentTarget.value),
      value: firstName,
    },
    {
      label: 'Last Name',
      placeHolder: 'Enter the users last name',
      onChange: (e: React.FormEvent<HTMLInputElement>) =>
        setLastName(e.currentTarget.value),
      value: lastName,
    },
    {
      label: 'Job Title',
      placeHolder: 'Enter the users job title',
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
            Create User
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
                onClick={() => handleSubmit({ firstName, jobTitle, lastName })}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUser;
