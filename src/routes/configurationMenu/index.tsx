import { Slot, component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Sidebar } from '~/routes/configurationMenu/sidebar';

export default component$(() => {
  return (
    <div class='fixed z-10 inset-0 overflow-y-auto'>
      <div class='flex items-center justify-center min-h-screen'>
        <div class='fixed inset-0 bg-gray-500 opacity-75'></div>
        <div class='bg-white w-full h-full md:w-3/4 md:h-3/4 grid grid-cols-4 gap-4 shadow-xl z-10'>
          <div class='bg-gray-100 p-4'>
            <h2 class='text-xl font-semibold text-gray-700 mb-4'>
              Configuración
            </h2>
            <Sidebar />
          </div>
          <div class='col-span-3 p-4'>
            {/* Content for each section */}
            {<Slot />}
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
