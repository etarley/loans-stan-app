import { component$ } from '@builder.io/qwik';
import { Notifications } from './notifications/notifications';

export const NotificationsList = component$(() => {
  return (
    <menu
      class={`shadow-lg bg-white w-96 h-[540px] text-black rounded-lg absolute text-sm top-12 flex-col flex items-start gap-0 justify-self-start  right-0 `}
    >
      <div class='flex gap-44 mx-auto p-4 items-center'>
        <div class='flex bg-gray-200 rounded-full px-1 py-0.5 gap-2'>
          <button class='truncate px-2 py-1 rounded-full  bg-inherit font-semibold text-gray-500'>
            Todas
          </button>
          <button class='truncate px-2 py-1 rounded-full shadow h-30 bg-white font-semibold text-gray-800'>
            Sin leer
          </button>
        </div>
        <button class='relative group text-gray-400 hover:text-gray-800'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-5 h-5 '
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            />
          </svg>
          <span class='bg-black text-center truncate invisible group-hover:visible group-hover:transition-all group-hover:delay-500 text-white py-0.5 px-2 rounded-lg absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center'>
            Marcar como leidos
          </span>
        </button>
      </div>
      <div class='overflow-x-hidden overflow-y-scroll h-full w-full scroll-m-0 scroll-p-0'>
        <Notifications />
      </div>
      {/* <div>
        <img class='mx-auto' src='/images/noNotifications.jpg' />
        <p class='text-center mt-4'>No hay nuevas notificaciones</p>
      </div> */}
    </menu>
  );
});
