import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className='w-full py-1 shadow-md bg-primario-oscuro rounded-b-2xl'>
      <div className='w-[90%] my-0 mx-auto flex items-center justify-between gap-3'>
        <div>
          <Link href='/'>
            <Image
              src='/nextShopping-logo.svg'
              alt='Next Shopping Logo'
              width={70}
              height={50}
              priority
              className='w-14 h-14'
            />
          </Link>
        </div>

        <div className='bg-white rounded-lg px-2 py-1 flex items-center justify-between gap-2 flex-1 focus-within:ring-2 focus-within:ring-primario'>
          <form role='search' action='/search' className='flex items-center gap-1 justify-between w-full'>
            <label className='w-full'>
              <span className='sr-only'>Buscar productos</span>
              <input type='search' name='q' className='w-full px-1.5 outline-none' placeholder='Buscar...' />
            </label>

            <button type='submit' aria-label='Buscar'>🔍</button>
          </form>
        </div>

        <nav className='lg:flex items-center gap-4 hidden justify-between'>
          <Link href='/login' className='text-white hover:text-gray-300 font-semibold'>
            Hola, identifícate
          </Link>

          <Link href='/orders' className='text-white hover:text-gray-300 font-semibold'>
            Mis Pedidos
          </Link>

          <Link href='/cart' className='text-white hover:text-gray-300 flex items-center gap-1'>
            <ShoppingCart size={20} />
            <span className='sr-only'>Carrito,</span>
            <span>0</span>
            <span className='sr-only'>productos</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;