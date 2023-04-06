import {
  component$,
  Slot,
  useSignal,
  useContextProvider,
  createContextId,
} from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { AddClientModal } from '~/components/addClientModal/addClientModal';

import Header from '~/components/starter/header/header';
import Sidebar from '~/components/starter/sidebar/sidebar';
export type Object = {
  value: boolean;
};
export type SearchValue = {
  value: string;
};

export type Show = boolean;
export const SidebarState = createContextId<Object>('sidebarState');
export const AddClientModalState = createContextId<Object>(
  'addClientModalState'
);

export type search = string;
export const SearchState = createContextId<SearchValue>('SearchState');

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const showSidebar = useSignal<Show>(true);
  const search = useSignal<search>('');
  const addClientModal = useSignal<Show>(false);

  useContextProvider(SearchState, search);
  useContextProvider(SidebarState, showSidebar);
  useContextProvider(AddClientModalState, addClientModal);

  return (
    <div class='page bg-gray-300'>
      <main>
        <Header />
        <div class='flex'>
          <Sidebar />
          <Slot />
        </div>
        {addClientModal.value && <AddClientModal />}
      </main>
    </div>
  );
});
