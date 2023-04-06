/* eslint-disable qwik/no-react-props */
import { component$, useStore, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AgGrid } from '~/integrations/react/agGrid';
import mockData from './MOCK_DATA.json';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { SearchState } from './layout';

export default component$(() => {
  const rowData = useStore(mockData);
  const searchState = useContext(SearchState);

  const columnDefs = useStore([
    { field: 'Nombre', sortable: true, flex: 1.5 },
    { field: 'Balance', sortable: true, flex: 1 },
    { field: 'Proximo Pago', sortable: true, flex: 1 },
    { field: 'Capital', sortable: true, flex: 1 },
    { field: 'Crédito Disponible', sortable: true, flex: 1 },
    { field: 'Interes', sortable: true, flex: 1 },
  ]);

  return (
    <div class='mt-[80px] h-[87vh] w-[80%] mx-auto rounded-lg shadow bg-white'>
      <div class=' w-[98%] h-[96%] mt-[1%] mb-[1%] mx-auto'>
        {rowData.length > 0 ? (
          <AgGrid
            columnDefs={columnDefs}
            rowData={rowData}
            client:load
            className='ag-theme-material'
            pagination={true}
            paginationAutoPageSize={true}
            suppressAutoSize={false}
            quickFilterText={searchState.value}
          ></AgGrid>
        ) : (
          <div class='h-[100%] w-[100%] flex justify-center items-center mt-1/2 '>
            <svg
              class='animate-spin -ml-1 mr-3 h-10 w-10 text-gray-500'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                class='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                stroke-width='4'
              ></circle>
              <path
                class='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          </div>
        )}
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
