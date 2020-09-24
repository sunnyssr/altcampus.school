import React from 'react';
import ActiveLink from './ActiveLink';
import Link from 'next/link';

function Header() {
  return (
    <header className='border-b-2 z-20 relative py-3'>
      <nav className='container flex justify-between mx-auto items-center px-6 relative z-10 max-w-6xl'>
        <Link href='/'>
          <a>
            <img className='w-32' src='/assets/media/logo.svg' alt='Logo' />
          </a>
        </Link>
        <label for='toggle' className='bars hidden'>
          <img
            className='nav-menu-img w-8'
            src='/assets/media/open-menu.svg'
            alt='menu-icon'
          />
        </label>

        <input type='checkbox' className='toggle hidden' id='toggle' />
        <div className='nav-menu'>
          <label for='toggle' className='close-menu hidden'>
            <img
              className='nav-menu-img w-8'
              src='/assets/media/close.svg'
              alt='menu-icon'
            />
          </label>

          <input type='checkbox' className='toggle hidden' id='toggle' />
          <ul className='md:flex md:items-center'>
            <li className='mb-8 md:mb-0'>
              <ActiveLink href='/'>
                <a className='text-4xl font- md:text-xl text-gold-500 md:text-dark-blue-300 pt-1 hover:text-dark-blue-500'>
                  Home
                </a>
              </ActiveLink>
            </li>
            <li className='mb-8 md:mb-0 md:ml-10'>
              <ActiveLink href='/how-it-works'>
                <a className='text-4xl md:text-xl text-gold-500  md:text-dark-blue-300 pt-1 hover:text-dark-blue-500'>
                  How it works
                </a>
              </ActiveLink>
            </li>
            <li className='mb-8 md:mb-0 md:ml-10'>
              <ActiveLink href='/pricing'>
                <a className='text-4xl md:text-xl text-gold-500  md:text-dark-blue-300 pt-1 hover:text-dark-blue-500'>
                  Pricing
                </a>
              </ActiveLink>
            </li>
            <li className='mb-8 md:mb-0 md:ml-10'>
              <ActiveLink href='#faqs'>
                <a className='text-4xl md:text-xl text-gold-500  md:text-dark-blue-300 pt-1 hover:text-dark-blue-500'>
                  FAQs
                </a>
              </ActiveLink>
            </li>
            <li className='mb-8 md:mb-0 md:ml-10'>
              <a
                className='inline-flex content-center items-center text-xl md:text-base text-white md:text-dark-blue-300 uppercase px-12 py-4 md:px-4 md:py-1 border rounded border-green-theme-500 shadow-md  bg-green-theme-500 md:bg-transparent hover:shadow-inner tracking-wide'
                href='https://launchpad.altcampus.school/login'
              >
                login
              </a>
            </li>
            <li className='md:ml-4'>
              <a
                className='inline-flex content-center items-center text-xl md:text-base text-white px-12 py-4 md:px-4 md:py-1 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md hover:shadow-inner tracking-wide'
                href='https://launchpad.altcampus.school/signup'
              >
                signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;