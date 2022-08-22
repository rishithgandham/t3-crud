import z, { TypeOf } from 'zod';

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  jobTitle: z.string(),
});
export const updateUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  jobTitle: z.string(),
  id: z.string().uuid(),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
export type UpdateUserInput = z.TypeOf<typeof updateUserSchema>;

const singleUserSchema = z.object({
  id: z.string().uuid(),
});

export const getSingleUserSchema = singleUserSchema;
export const deleteSingleUserSchema = singleUserSchema;

export type DeleteUserInput = z.TypeOf<typeof deleteSingleUserSchema>;
