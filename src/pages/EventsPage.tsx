import React, { useEffect, useState } from 'react';
import Container from 'components/Container';
import Counter from 'components/Counter';
import { Navigate } from 'react-router-dom';
import Color from 'components/Color';

const InformationPage = () => {
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
      {change && <Navigate to="/public/information" />}
      <div className="events-page">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-6xl">Události</h1>
          <h2 className="text-2xl">Seznam událostí</h2>
          <div className="flex flex-row gap-16">
            <div className="flex flex-row items-center gap-4">
              <Color className="h-6 w-6 bg-red-700" />{' '}
              <h2 className="text-2xl">Předchozí události</h2>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Color className="h-6 w-6 bg-green-600" />{' '}
              <h2 className="text-2xl">Události, kteŕe probíhají</h2>
            </div>
            <div className="flex flex-row items-center gap-4">
              <Color className="h-6 w-6 bg-sky-500" />{' '}
              <h2 className="text-2xl">Nadcházející události</h2>
            </div>
          </div>
          <Counter value={value} max={30} />
        </div>
        <Container className="mx-auto"></Container>
      </div>
    </>
  );
};

export default InformationPage;
