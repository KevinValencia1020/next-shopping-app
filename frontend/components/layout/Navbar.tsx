'use client';
import { House, Heart, ShoppingCart, PackageCheck, UserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    {
      name: 'home',
      icon: <House size={20}/>,
      label: 'Home',
      href: '/'
    },
    {
      name: 'favorites',
      icon: <Heart size={20}/>,
      label: 'Favoritos',
      href: '/favorites'
    },
    {
      name: 'cart',
      icon: <ShoppingCart size={20}/>,
      label: 'Carrito',
      href: '/cart'
    },
    {
      name: 'orders',
      icon: <PackageCheck size={20}/>,
      label: 'Pedidos',
      href: '/orders'
    },
    {
      name: 'profile',
      icon: <UserRound size={20}/>,
      label: 'Perfil',
      href: '/profile'
    },
  ];
  return (
    <nav className='fixed bottom-0 w-full z-50 inset-x-0 md:hidden'>
      <ul className='flex justify-around items-center w-full h-16 bg-primario-oscuro text-white'>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.name} className='flex flex-row items-center gap-1 relative'>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0'}`}></span>
            <Link href={item.href} className={`flex flex-col items-center justify-evenly`}>
              {item.icon}
              <span className='text-xs'>{item.label}</span>
            </Link>
          </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Navbar;