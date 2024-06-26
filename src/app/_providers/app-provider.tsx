'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/feature/theme/theme-provider';
import { ComposeChildren } from '@/shared/lib/react';

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      {children}
    </ComposeChildren>
  );
}
