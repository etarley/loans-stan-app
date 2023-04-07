/* eslint-disable qwik/no-react-props */
import { component$, useContext } from '@builder.io/qwik';
import { SidebarState } from '~/routes/layout';
import { MotionDiv } from '~/integrations/react/motion';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const customerGroups = ['Group 1', 'Group 2', 'Group 3'];
  const showSidebar = useContext(SidebarState);
  return (
    <MotionDiv
      layout
      initial={false}
      animate={showSidebar.value ? 'open' : 'closed'}
      variants={{
        open: { width: 305, x: 0, zIndex: 0 },
        closed: { width: 0, x: '-100%', zIndex: -1 },
      }}
      transition={{ duration: 0.2 }}
      className='overflow-hidden bg-gray-100 shadow h-screen pt-[60px] w-64 items-center flex flex-col mt-10'
    >
      <h2 class='text-xl font-semibold text-gray-800 mb-4'>Customer Groups</h2>
      <ul class='list-none flex flex-col gap-1'>
        {customerGroups.map((group, index) => (
          <li
            class=' text-left  h-8 hover:bg-gray-200 cursor-pointer pl-4 pe-52 flex items-center justify-between mx-1'
            key={index}
          >
            <Link href='#'>{group}</Link>
          </li>
        ))}
      </ul>
      <div class='mt-4'>
        <button class='text-teal-500 hover:bg-gray-200 font-bold py-2 px-20  flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M19 11H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm-7 7v-14a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0z' />
          </svg>
          Add Group
        </button>
      </div>
    </MotionDiv>
  );
});
