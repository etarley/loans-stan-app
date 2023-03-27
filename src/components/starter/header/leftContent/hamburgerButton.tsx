import { component$, useContext } from '@builder.io/qwik';
import { SidebarState } from '~/routes/layout';

export default component$(() => {
  const showSidebar = useContext(SidebarState);
  return (
    <button
      class='ml-8 hover:bg-teal-500 p-1 rounded-sm stroke-white relative group'
      onClick$={() => {
        showSidebar.value = !showSidebar.value;
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-6 h-6 '
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        />
      </svg>
      <p class='bg-black text-center truncate invisible group-hover:visible text-gray-400 py-0.5 px-1 rounded absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center'>
        ver menu
      </p>
    </button>
  );
});
