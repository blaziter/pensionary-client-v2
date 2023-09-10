import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  subtitle: number;
  to: string;
}

const Tile = ({ title, subtitle, to }: Props) => {
  return (
    <>
      <Link to={`/admin/table/${to}/1`}>
        <div className="rounded bg-purple-600 px-5 py-6 text-white hover:cursor-pointer hover:bg-gray-300 hover:text-black">
          <article className="flex flex-col items-center">
            <p className="text-2xl">{title}</p>
            <p className="text-lg">{subtitle}</p>
          </article>
        </div>
      </Link>
    </>
  );
};

export default Tile;
