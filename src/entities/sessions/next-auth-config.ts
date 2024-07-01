import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { dbClient } from '@/shared/lib/db';
import { AuthOptions } from 'next-auth';

export const authOptions = {
  adapter: PrismaAdapter(dbClient) as AuthOptions['adapter'],
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
};
