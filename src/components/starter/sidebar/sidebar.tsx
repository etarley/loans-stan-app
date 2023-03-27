import { component$, useContext } from '@builder.io/qwik';
import { SidebarState } from '~/routes/layout';

export default component$(() => {
  const showSidebar = useContext(SidebarState);
  return (
    <div class={showSidebar.value ? 'sidebar' : 'sidebar hidden'}>sidebar</div>
  );
});
