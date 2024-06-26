import { Metadata } from 'next';
import { Fragment, PropsWithChildren } from 'react';
import { AppHeader } from '@/widgets/app-header/app-header';

export const metadata: Metadata = {
  title: '',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <AppHeader variant='private' />
      {children}
    </Fragment>
  );
}
