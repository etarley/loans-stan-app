import { component$ } from '@builder.io/qwik';
import { useDocumentHead } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();

  return (
    <>
      <title>{head.title}</title>

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </>
  );
});
