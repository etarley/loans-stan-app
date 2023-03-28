import { component$, useContext } from '@builder.io/qwik';
import { SidebarState } from '~/routes/layout';

export default component$(() => {
  const showSidebar = useContext(SidebarState);
  return (
    <button
      class=' hover:bg-teal-500 p-2 rounded-full stroke-white relative group'
      onClick$={() => {
        showSidebar.value = !showSidebar.value;
      }}
      window:onKeyDown$={(event) => {
        if (event.key.toLowerCase() === 'm') {
          showSidebar.value = !showSidebar.value;
        }
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
          Vista
          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        />
      </svg>
      <span class='bg-black text-center truncate invisible group-hover:visible group-hover:transition-all group-hover:delay-500 text-gray-400 py-0.5 px-2 rounded-lg absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center'>
        ver menu
      </span>
    </button>
  );
});
