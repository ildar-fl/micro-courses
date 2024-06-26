import { Layout } from './_ui/layout';
import { Logo } from './_ui/logo';
import { MainNav } from './_ui/main-nav';
import { Profile } from './_ui/profile';
import { ToggleTheme } from '@/feature/theme/toggle-theme';

export function AppHeader({
  variant,
}: {
  variant: 'auth' | 'private' | 'public';
}) {
  const isProfile = variant !== 'auth';

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  );
}
