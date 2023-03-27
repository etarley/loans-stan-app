import { component$ } from '@builder.io/qwik';
import HamburgerButton from './leftContent/hamburgerButton';
import { SearchBar } from './leftContent/searchBar';
import { HomeButton } from './leftContent/homeButton';

export default component$(() => {
  return (
    <header
      class={'flex bg-teal-600 text-white justify-between items-center py-2'}
    >
      <div class={'flex items-center gap-2'}>
        <HamburgerButton />
        <HomeButton />
        <SearchBar />
      </div>
    </header>
  );
});
