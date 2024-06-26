import { Fragment, PropsWithChildren } from 'react';
import { AppHeader } from '@/widgets/app-header/app-header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <AppHeader variant='public' />
      {children}
    </Fragment>
  );
}
