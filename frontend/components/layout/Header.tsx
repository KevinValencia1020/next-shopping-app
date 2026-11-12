import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';

interface Category {
  name: string;
  slug: string;
}

const categories: Category[] = [
  { name: 'Televisores', slug: 'televisores' },
  { name: 'Lavadoras', slug: 'lavadoras' },
  { name: 'Neveras', slug: 'neveras' },
  { name: 'Estufas', slug: 'estufas' },
  { name: 'Tecnología', slug: 'tecnologia' },
]

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

        <nav aria-label='cuenta' className='lg:flex items-center gap-4 hidden justify-between'>
          <Link href='/login' className='text-white hover:text-gray-300 font-semibold transition-colors duration-300 ease-in-out'>
            Hola, identifícate
          </Link>

          <Link href='/orders' className='text-white hover:text-gray-300 font-semibold transition-colors duration-300 ease-in-out'>
            Mis Pedidos
          </Link>

          <Link href='/cart' className='text-white hover:text-gray-300 flex items-center gap-1 transition-colors duration-300 ease-in-out'>
            <ShoppingCart size={20} />
            <span className='sr-only'>Carrito,</span>
            <span>0</span>
            <span className='sr-only'>productos</span>
          </Link>
        </nav>
      </div>

      <nav aria-label='categorías' className='lg:flex items-center hidden justify-evenly'>
        <Link href='/category' className="flex items-center flex-row gap-2 text-white hover:text-gray-300 font-normal text-sm py-1 px-2 transition-colors duration-300 ease-in-out">
          <Menu size={20}/>
          Todas las categorías
        </Link>

        <Link href='/offers' className='text-white hover:text-gray-300 font-normal text-sm py-1 px-2 transition-colors duration-300 ease-in-out'>
          Ofertas del día
        </Link>
        {
          categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className='text-white hover:text-gray-300 font-normal text-sm py-1 px-2 transition-colors duration-300 ease-in-out'
            >
              {category.name}
            </Link>
          ))
        }

        <Link href='/customer-service' className='text-white hover:text-gray-300 font-normal text-sm py-1 px-2 transition-colors duration-300 ease-in-out'>
          Servicio al cliente
        </Link>
        
      </nav>
    </header>
  );
}

export default Header;