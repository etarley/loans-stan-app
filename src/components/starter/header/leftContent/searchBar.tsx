import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';

export const SearchBar = component$(() => {
  return (
    <Form class='bg-teal-500 rounded py-0.5 px-1 ml-1 gap-x-0.5 flex items-center group hover:bg-white shadow hover:border focus-within:outline focus-within:outline-teal-300 hover:border-teal-300 focus-within:shadow-lg focus-within:hover:border-none focus-within:bg-white '>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        class='w-6 h-6 group-hover:stroke-black px-0.5 group-focus-within:stroke-black'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>
      <input
        class='outline-none border-none bg-inherit placeholder:text-teal-200 group-hover:placeholder:text-gray-400 text-gray-700 focus:placeholder:text-gray-400'
        placeholder='Buscar'
      ></input>
      <button></button>
    </Form>
  );
});
