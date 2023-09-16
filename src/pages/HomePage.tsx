import React from 'react';

/**
 * @author blaziter
 * @returns
 */
export const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <figure className="rounded-xl bg-slate-100 p-8 md:p-0">
          <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
            <figcaption>
              <h1 className="text-3xl font-bold text-gray-900">Pensionary</h1>
              <p className="mt-4 text-lg text-gray-500">
                Aplikace Pensionary slouží pro zobrazování stavu personálu,
                událostí a jejich úprav.
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
};
