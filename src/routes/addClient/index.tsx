import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Form, Link } from '@builder.io/qwik-city';

export default component$(() => {
  // const balance = useSignal('');
  // const capital = useSignal('');
  // const creditAvailable = useSignal('');
  // const interest = useSignal('');
  // const name = useSignal('');
  // const paymentDate = useSignal('');
  const paymentCurrency = useSignal('DOP');
  const handleCurrencyChange = $((event: any) => {
    paymentCurrency.value = event.target.value;
  });

  return (
    <div class='fixed z-10 inset-0 overflow-y-auto'>
      <div class='flex items-center justify-center min-h-screen'>
        <div class='fixed inset-0 bg-gray-500 opacity-75'></div>
        <div class='bg-white rounded-lg w-full md:w-1/2 px-6 py-4 shadow-xl z-10'>
          <h2 class='text-2xl font-semibold text-teal-500 mb-4'>
            Agregar Cliente
          </h2>
          <Form>
            <div class='mb-4'>
              <label class='text-gray-700'>Nombre:</label>
              <input
                type='text'
                id='nombre'
                name='nombre'
                class='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div class='mb-4'>
              <label class='text-gray-700'>Balance:</label>
              <div class='flex'>
                <input
                  type='number'
                  id='balance'
                  name='balance'
                  class='w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
                  step='0.01'
                  min='0'
                />
                <select
                  name='balance'
                  class='border border-gray-300 rounded-r-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400'
                  value={paymentCurrency.value}
                  onInput$={handleCurrencyChange}
                >
                  <option value='USD'>USD</option>
                  <option value='DOP'>DOP</option>
                </select>
              </div>
            </div>
            <div class='mb-4'>
              <label class='text-gray-700'>Próximo Pago:</label>
              <input
                type='date'
                id='proximo-pago'
                name='proximo-pago'
                class='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
              />
            </div>
            <div class='mb-4'>
              <label class='text-gray-700'>Crédito Disponible:</label>
              <div class='flex'>
                <input
                  type='number'
                  id='credito-disponible'
                  name='credito-disponible'
                  class='w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
                  step='0.01'
                  min='0'
                />
                <select
                  name='credito-disponible-currency'
                  class='border border-gray-300 rounded-r-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400'
                  value={paymentCurrency.value}
                  onInput$={handleCurrencyChange}
                >
                  <option value='USD'>USD</option>
                  <option value='DOP'>DOP</option>
                </select>
              </div>
            </div>
            <div class='mb-4'>
              <label class='text-gray-700'>Interes:</label>
              <div class='flex'>
                <input
                  type='number'
                  id='interes'
                  name='interes'
                  class='w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-400'
                  step='0.01'
                  min='0'
                />
                <select
                  name='interes-currency'
                  class='border border-gray-300 rounded-r-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400'
                  value={paymentCurrency.value}
                  onInput$={handleCurrencyChange}
                >
                  <option value='USD'>USD</option>
                  <option value='DOP'>DOP</option>
                </select>
              </div>
            </div>
            <div class='flex justify-end space-x-2 mt-8'>
              <Link
                type='button'
                class='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg'
                href='/'
              >
                Cancel
              </Link>
              <button
                type='submit'
                class='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg'
              >
                Add Client
              </button>
            </div>
          </Form>
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
