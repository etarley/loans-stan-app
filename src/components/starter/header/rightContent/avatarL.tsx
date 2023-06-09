import { component$, $ } from '@builder.io/qwik';
import { AvatarRC } from '~/integrations/react/avatar';
import type { Props } from './notificationsButton';

export const AvatarL = component$<Props>(({ OpenMenu }) => {
  const openAccountSettings = $(() => {
    if (OpenMenu.value === 'account') {
      OpenMenu.value = 'none';
    } else {
      OpenMenu.value = 'account';
    }
  });
  return (
    <button
      class={`relative ${
        OpenMenu.value === 'account' && 'bg-teal-700'
      } flex items-center group hover:bg-teal-500 px-2 py-0.5 rounded-full gap-1 cursor-pointer hover:transition-all hover:delay-100`}
      onClick$={openAccountSettings}
    >
      <AvatarRC
        size={40}
        name='Argenis Leon'
        variant='marble'
        colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-[24px] h-[24px]  group-hover:visible group-hover:transition-all group-hover:delay-100'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
        />
      </svg>
      <span class='bg-black text-center truncate invisible group-hover:visible group-hover:transition-all group-hover:delay-500 text-white py-0.5 px-2 rounded-lg absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center'>
        Configurar Perfil
      </span>
    </button>
  );
});
