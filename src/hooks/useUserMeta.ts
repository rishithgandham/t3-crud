import { useState } from 'react';

export const useUserMeta = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    jobTitle,
    setJobTitle,
  };
};
