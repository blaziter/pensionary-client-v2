import React, { useEffect, useState } from 'react';
import Turnov from '../../assets/turnov-light.svg';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, Navigate } from 'react-router-dom';
import './Header.css';
import { useAuthentication } from '../../hooks/useAuthentication';
import { MaterialSymbolsArrowDropDown } from '../icons';
import { useAppSelector } from '../../app/hooks';

const Header = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const useAuth = useAuthentication();
  const [redirLogout, setRedirLogout] = useState(false);

  const handleLogout = () => {
    useAuth.logOut();
    setRedirLogout(true);
    setTimeout(() => {
      setRedirLogout(false);
    }, 500);
  };

  useEffect(() => {
    console.log(useAuth);
  }, [useAuth.auth]);

  return (
    <>
      {redirLogout && <Navigate to="/" />}
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to={'/'}>
              <a className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={Turnov} alt="" />
              </a>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link to={'/public/information'}>
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Informace
              </a>
            </Link>
            <Link to={'/public/status'}>
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Status
              </a>
            </Link>
            <Link to={'/public/events'}>
              <a className="text-sm font-semibold leading-6 text-gray-900">
                Události
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isLogged ? (
              <div
                key="logout"
                className="dropdown relative inline-block rounded border border-solid border-gray-100 px-4 py-2"
              >
                <span className="flex flex-row items-center gap-4">
                  {useAuth.username} <MaterialSymbolsArrowDropDown />
                </span>
                <div className="menu absolute mt-2 hidden min-w-[10rem] select-none border border-solid border-gray-100">
                  <div
                    onClick={handleLogout}
                    className="p-4 hover:bg-purple-200"
                  >
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              <Link key="login" to={'/login'}>
                <a className="text-sm font-semibold leading-6 text-gray-900">
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            )}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={'/'}>
                <a className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src={Turnov} alt="" />
                </a>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link to={'/public/information'}>
                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Informace
                    </a>
                  </Link>
                  <Link to={'/public/status'}>
                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Status
                    </a>
                  </Link>
                  <Link to={'/public/events'}>
                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Události
                    </a>
                  </Link>
                </div>
                <div className="py-6">
                  <Link to={'/login'}>
                    <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Log in
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
