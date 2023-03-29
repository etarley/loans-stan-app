import { component$ } from '@builder.io/qwik';
import HamburgerButton from './leftContent/hamburgerButton';
import { SearchBar } from './leftContent/searchBar';
import { HomeButton } from './leftContent/homeButton';
import { AvatarL } from './rightContent/avatarL';
import { AddButton } from './rightContent/addButton';
import { NotificationsButton } from './rightContent/notificationsButton';
import { HelpButton } from './rightContent/helpButton';
import { Notifications } from './rightContent/dropdowns/notifications';
// import { HelpMenu } from './rightContent/dropdowns/helpMenu';
// import { AccountMenu } from './rightContent/dropdowns/accountMenu';

export default component$(() => {
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
            <NotificationsButton />
            <Notifications />
          </div>
          <div class='relative'>
            <HelpButton />
            {/* <HelpMenu /> */}
          </div>
          <div class='relative'>
            <AvatarL />
            {/* <AccountMenu /> */}
          </div>
        </div>
      </navbar>
    </header>
  );
});
