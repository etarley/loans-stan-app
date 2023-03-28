import { component$ } from '@builder.io/qwik';
import HamburgerButton from './leftContent/hamburgerButton';
import { SearchBar } from './leftContent/searchBar';
import { HomeButton } from './leftContent/homeButton';
import { AvatarL } from './rightContent/avatarL';
import { AddButton } from './rightContent/addButton';
import { Notifications } from './rightContent/notifications';
import { HelpButton } from './rightContent/helpButton';
import { AccountMenu } from './rightContent/dropdowns/accountMenu';

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
          <Notifications />
          <HelpButton />
          <div class='relative'>
            <AvatarL />
            <AccountMenu />
          </div>
        </div>
      </navbar>
    </header>
  );
});
