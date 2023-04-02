import { component$, $ } from '@builder.io/qwik';
import type { Props } from './notificationsButton';

export const HelpButton = component$<Props>(({ OpenMenu }) => {
  const openHelp = $(() => {
    if (OpenMenu.value === 'help') {
      OpenMenu.value = 'none';
    } else {
      OpenMenu.value = 'help';
    }
  });
  return (
    <button
      class={`hover:bg-teal-500 help rounded-full p-2 relative group ${
        OpenMenu.value === 'help' && 'bg-teal-700'
      }`}
      onClick$={openHelp}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-[24px] h-[24px]'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
        />
      </svg>
      <span class='bg-black text-center truncate invisible group-hover:visible group-hover:transition-all group-hover:delay-500 text-white py-0.5 px-2 rounded-lg absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center'>
        Solicitar ayuda
      </span>
    </button>
  );
});
