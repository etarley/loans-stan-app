import {
  component$,
  Slot,
  useSignal,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Sidebar from '~/components/starter/sidebar/sidebar';
export type Object = {
  value: boolean;
};
export type SearchValue = {
  value: string;
};

export type ShowSideBar = boolean;
export const SidebarState = createContextId<Object>('sidebarState');

export type search = string;
export const SearchState = createContextId<SearchValue>('SearchState');

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const showSidebar = useSignal<ShowSideBar>(true);
  const search = useSignal<search>('');
  useContextProvider(SearchState, search);
  useContextProvider(SidebarState, showSidebar);
  return (
    <div class='page bg-gray-300'>
      <main>
        <Header />
        <div class='flex'>
          <Sidebar />
          <Slot />
        </div>
      </main>
    </div>
  );
});
