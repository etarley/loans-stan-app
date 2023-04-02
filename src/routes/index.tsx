/* eslint-disable qwik/no-react-props */
import {
  component$,
  useStore,
  useSignal,
  createContextId,
  useContextProvider,
  use,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { AgGrid } from '~/integrations/react/agGrid';
import mockData from './MOCK_DATA.json';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

export default component$(() => {
  const rowData = useStore(mockData);

  const columnDefs = useStore([
    { field: 'Nombre', sortable: true },
    { field: 'Balance', sortable: true },
    { field: 'Proximo Pago', sortable: true },
    { field: 'Capital', sortable: true },
    { field: 'Crédito Disponible', sortable: true },
    { field: 'Interes', sortable: true },
  ]);

  return (
    <div class='mt-[80px] h-[87vh] w-[80%] mx-auto rounded-lg shadow bg-teal-50 '>
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
            quickFilterText='Valencia'
          ></AgGrid>
        ) : (
          <div class='h-[100%] w-[100%] flex justify-center items-center'>
            <div class='flex flex-col items-center'>
              <div class='h-[200px] w-[200px] bg-gray-100 rounded-full shadow'></div>
              <div class='text-xl font-bold mt-[20px]'>
                No se encontraron datos
              </div>
            </div>
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
