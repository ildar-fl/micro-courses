import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Авторизация',
};

interface IPageProps {
  params: {};
  searchParams: {};
}

export default function SignInNext({}: IPageProps) {
  return <div className='container py-10'>SignIn</div>;
}
