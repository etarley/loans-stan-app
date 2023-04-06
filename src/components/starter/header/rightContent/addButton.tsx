import { component$, useContext } from '@builder.io/qwik';
import { AddClientModalState } from '~/routes/layout';
export const AddButton = component$(() => {
  const addClientModal = useContext(AddClientModalState);

  return (
    <button
      class='hover:bg-teal-500 rounded-full p-2 relative group cursor-pointer'
      onClick$={() => {
        addClientModal.value = !addClientModal.value;
      }}
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
          d='M12 4.5v15m7.5-7.5h-15'
        />
      </svg>
      <span class='bg-black text-center truncate invisible group-hover:visible group-hover:transition-all group-hover:delay-500 text-white py-0.5 px-2 rounded-lg absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center'>
        Agregar cliente
      </span>
    </button>
  );
});
