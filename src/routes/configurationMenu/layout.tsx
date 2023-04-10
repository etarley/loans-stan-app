import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class='page bg-gray-300'>
      <main>
        <Slot />
      </main>
    </div>
  );
});
