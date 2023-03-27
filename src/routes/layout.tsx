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
export type ShowSideBar = boolean;
export const SidebarState = createContextId<Object>('sidebarState');

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const showSidebar = useSignal<ShowSideBar>(true);

  useContextProvider(SidebarState, showSidebar);
  return (
    <div class='page'>
      <main>
        <Header />
        <Sidebar />
        <Slot />
      </main>
    </div>
  );
});
