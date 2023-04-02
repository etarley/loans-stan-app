import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { AvatarRC } from '~/integrations/react/avatar';

export const AccountMenu = component$(() => {
  return (
    <menu class='shadow-lg bg-gray-50 text-black account rounded-lg absolute text-sm top-12 flex-col flex items-start gap-2 justify-self-start pb-4 right-0'>
      <Link class='flex items-center gap-4 bg-teal-50 cursor-pointer p-6 rounded'>
        <AvatarRC
          size={60}
          name='Argenis Leon'
          variant='marble'
          colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
        />
        <div class='flex flex-col'>
          <span class=' truncate font-semibold'>Argenis Leon</span>
          <span class='text-teal-600 text-sm font-light'>
            argenisleon@example.com
          </span>
        </div>
      </Link>
      <Link class='flex items-center gap-4 py-2 px-6 hover:bg-teal-600 hover:text-white w-full cursor-pointer rounded'>
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
            d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
          />
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
        <span>Configuración</span>
      </Link>
      <Link class='flex items-center gap-4 py-2 px-6 hover:bg-teal-600 hover:text-white w-full cursor-pointer rounded'>
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
            d='M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
          />
        </svg>

        <span>Historial de transacciones</span>
      </Link>
      <button class='flex items-center text-red-600 gap-4 py-2 px-6 hover:bg-teal-600 hover:text-white w-full cursor-pointer rounded'>
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
            d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
          />
        </svg>
        <span>Salir</span>
      </button>
    </menu>
  );
});
