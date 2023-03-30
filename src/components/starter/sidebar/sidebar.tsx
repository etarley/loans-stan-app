/* eslint-disable qwik/no-react-props */
import { component$, useContext } from '@builder.io/qwik';
import { SidebarState } from '~/routes/layout';
import { MotionDiv, MotionSpan } from '~/integrations/react/motion';

export default component$(() => {
  const showSidebar = useContext(SidebarState);
  return (
    <MotionDiv
      layout
      initial={false}
      animate={showSidebar.value ? 'open' : 'closed'}
      variants={{
        open: { width: 400, x: 0 },
        closed: { width: 0, x: '-100%' },
      }}
      transition={{ duration: 0.2 }}
      className='overflow-hidden bg-gray-100 shadow h-[94vh]'
    >
      <MotionSpan>Sidebar</MotionSpan>
    </MotionDiv>
  );
});
