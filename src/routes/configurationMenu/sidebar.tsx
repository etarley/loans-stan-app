import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Sidebar = component$(() => {
  return (
    <nav>
      <Link
        href='/settingsCuentas'
        class='block mb-4 text-gray-700 hover:bg-gray-200 p-2'
      >
        {/* SVG icon for Cuentas */}
        Cuentas
      </Link>
      <Link
        href='/settingsGeneral'
        class='block mb-4 text-gray-700 hover:bg-gray-200 p-2'
      >
        {/* SVG icon for General */}
        General
      </Link>
      <Link
        href='/settingsOpciones'
        class='block mb-4 text-gray-700 hover:bg-gray-200 p-2'
      >
        {/* SVG icon for Opciones Avanzadas */}
        Opciones Avanzadas
      </Link>
      <Link
        href='/settingsNotificaciones'
        class='block mb-4 text-gray-700 hover:bg-gray-200 p-2'
      >
        {/* SVG icon for Notificaciones */}
        Notificaciones
      </Link>
    </nav>
  );
});
