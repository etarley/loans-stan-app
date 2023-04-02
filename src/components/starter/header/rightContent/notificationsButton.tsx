import { $, component$ } from '@builder.io/qwik';

export interface Props {
  OpenMenu: {
    value: 'notifications' | 'help' | 'account' | 'none';
  };
}

export const NotificationsButton = component$<Props>(({ OpenMenu }) => {
  const openNotifications = $(() => {
    if (OpenMenu.value === 'notifications') {
      OpenMenu.value = 'none';
    } else {
      OpenMenu.value = 'notifications';
    }
  });

  return (
    <button
      class={`hover:bg-teal-500 rounded-full p-2 relative group ${
        OpenMenu.value === 'notifications' && 'bg-teal-700'
      }`}
      onClick$={openNotifications}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-[24px] h-[24px] relative'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
        />
      </svg>
      <span class='bg-black text-center truncate invisible group-hover:visible group-hover:transition-all group-hover:delay-500 text-white py-0.5 px-2 rounded-lg absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center'>
        Notificaciones
      </span>
    </button>
  );
});
