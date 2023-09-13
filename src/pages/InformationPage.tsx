import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Container, Counter } from '@components';

export const InformationPage = () => {
  const [value, setValue] = useState<number>(30);
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let currentSecs = value;
      setValue(currentSecs - 0.01);
      if (currentSecs <= 0) setChange(true);
    }, 10);
    return () => clearInterval(interval);
  });

  return (
    <>
      {change && <Navigate to="/public/events" />}
      <div className="information-page">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-6xl">Informace</h1>
          <h2 className="text-2xl">
            na koho se obrátit se svými dotazy, žádostmi, připomínkami a
            stížnostmi
          </h2>
          <Counter value={value} max={30} />
        </div>
        <Container className="mx-auto"></Container>
      </div>
    </>
  );
};
