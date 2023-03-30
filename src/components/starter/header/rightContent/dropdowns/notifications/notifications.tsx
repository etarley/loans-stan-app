import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

const notifications = [
  {
    id: 1,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: false,
    img: 'money',
  },
  {
    id: 2,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: false,
    img: 'money',
  },
  {
    id: 3,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: false,
    img: 'money',
  },
  {
    id: 4,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: false,
    img: 'money',
  },
  {
    id: 5,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: false,
    img: 'money',
  },
  {
    id: 6,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: false,
    img: 'money',
  },
  {
    id: 7,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: true,
    img: 'money',
  },
  {
    id: 8,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: true,
    img: 'money',
  },
  {
    id: 9,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: true,
    img: 'money',
  },
  {
    id: 10,
    title: 'Nuevo cliente',
    description: 'Se ha registrado un nuevo cliente',
    date: 'Hace 5 minutos',
    read: true,
    img: 'money',
  },
  {
    id: 11,
    title: 'Nuevo cliente',
    description:
      'Se ha registrado un nuevo cliente en la base de datos de virus.',
    date: 'Hace 5 minutos',
    read: true,
    img: 'money',
  },
];

export interface NotificationProps {
  filter: { value: 'Todas' | 'Sin leer' };
}

export const Notifications = component$<NotificationProps>(({ filter }) => {
  const filteredNotifications = notifications.filter((notification) => {
    if (filter.value === 'Todas') {
      return true;
    } else {
      return !notification.read;
    }
  });

  return (
    <ul>
      {filteredNotifications.map((notification) => {
        return (
          <li key={notification.id}>
            <Link class='flex hover:bg-teal-100 items-center gap-1 bg-teal-50 w-full cursor-pointer px-5 p-6 rounded'>
              <div class='p-6 rounded-full border-solid border black bg-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-8 h-8 text-teal-400'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
                  />
                </svg>
              </div>

              <div class='flex flex-col ml-2'>
                <span class=' truncate font-semibold'>
                  {notification.title}
                </span>
                <span class='text-teal-600 text-sm w-56 h-auto font-light text-ellipsis'>
                  {notification.description}
                </span>
                <span class='text-gray-500 text-sm font-light'>
                  {notification.date}
                </span>
              </div>
              <button class='group relative text-gray-400 hover:text-gray-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-4 h-4'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span class='bg-black text-center invisible group-hover:visible group-hover:transition-all group-hover:delay-500 text-white py-0.5 px-2 rounded-lg absolute -bottom-6 text-sm left-1/2 flex -translate-x-1/2 items-start gap-3 justify-self-center z-0  truncate'>
                  Leído
                </span>
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
});
