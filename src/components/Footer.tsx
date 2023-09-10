import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 flex flex-col text-center">
        <span>
          Více informací najdete na Modrém kameni:{' '}
          <span className="text-[#107896]">modry-kamen.cz/</span>
        </span>
        <span>
          Vytvořili{' '}
          <a
            className="text-indigo-700 hover:text-indigo-400"
            href="https://github.com/stefanJambrich"
            target="_blank"
            rel="noopener noreferrer"
          >
            Štefan Jambrich
          </a>{' '}
          a{' '}
          <a
            className="text-indigo-700 hover:text-indigo-400"
            href="http://github.com/blaziter"
            target="_blank"
            rel="noopener noreferrer"
          >
            Petr Tran
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
