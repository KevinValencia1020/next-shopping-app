import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full py-1 shadow-md bg-primario-oscuro rounded-b-2xl'>
      <div className='w-[90%] my-0 mx-auto flex items-center justify-between gap-3'>
        <div className='header-logo'>
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

        <div className='bg-white'>
          <form role='search' className='flex items-center gap-1'>
            <label>
              <span className='sr-only'>Buscar productos</span>
              <input type='search' placeholder='Buscar...' />
            </label>

            <button type='submit' aria-label='Buscar'>🔍</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;