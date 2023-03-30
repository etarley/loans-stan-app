import { component$, useSignal } from '@builder.io/qwik';
import HamburgerButton from './leftContent/hamburgerButton';
import { SearchBar } from './leftContent/searchBar';
import { HomeButton } from './leftContent/homeButton';
import { AvatarL } from './rightContent/avatarL';
import { AddButton } from './rightContent/addButton';
import { NotificationsButton } from './rightContent/notificationsButton';
import { HelpButton } from './rightContent/helpButton';
import { NotificationsList } from './rightContent/dropdowns/notificationsList';
import { HelpMenu } from './rightContent/dropdowns/helpMenu';
import { AccountMenu } from './rightContent/dropdowns/accountMenu';

export type menuOpen = 'notifications' | 'help' | 'account' | 'none';

export type OpenMenu = {
  value: 'notifications' | 'help' | 'account' | 'none';
};

export default component$(() => {
  const openMenu = useSignal<menuOpen>('none');

  return (
    <header class={'bg-teal-600'}>
      <navbar
        class={
          'flex  text-white justify-between items-center py-2 w-[98%] mx-auto'
        }
      >
        <div class={'flex items-center gap-2'}>
          <HamburgerButton />
          <HomeButton />
          <SearchBar />
        </div>
        <div class={'flex items-center'}>
          <AddButton />
          <div class='relative'>
            <NotificationsButton OpenMenu={openMenu} />
            {openMenu.value === 'notifications' && <NotificationsList />}
          </div>
          <div class='relative'>
            <HelpButton OpenMenu={openMenu} />
            {openMenu.value === 'help' && <HelpMenu />}
          </div>
          <div class='relative'>
            <AvatarL OpenMenu={openMenu} />
            {openMenu.value === 'account' && <AccountMenu />}
          </div>
        </div>
      </navbar>
    </header>
  );
});
