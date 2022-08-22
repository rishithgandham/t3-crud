import {
  getSingleUserSchema,
  createUserSchema,
  deleteSingleUserSchema,
  updateUserSchema,
} from '../../schema/user.schema';
import { createRouter } from '../config/context';

export const userRouter = createRouter()
  .query('get-all', {
    resolve: async ({ ctx }) => {
      return await ctx.prisma.user.findMany();
    },
  })
  .query('get-user', {
    input: getSingleUserSchema,
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation('create-user', {
    input: createUserSchema,
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.user.create({
        data: {
          ...input,
        },
      });
    },
  })
  .mutation('update-user', {
    input: updateUserSchema,
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.user.update({
        where: {
          id: input.id,
        },
        data: input,
      });
    },
  })
  .mutation('delete-user', {
    input: deleteSingleUserSchema,
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.user.delete({
        where: {
          id: input.id,
        },
      });
    },
  });
