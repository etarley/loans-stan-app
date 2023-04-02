/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { AgGridReact } from 'ag-grid-react';
import type { AgGridReactProps } from 'ag-grid-react';
export const AgGrid = qwikify$<AgGridReactProps>((props) => {
  return <AgGridReact {...props}></AgGridReact>;
});
