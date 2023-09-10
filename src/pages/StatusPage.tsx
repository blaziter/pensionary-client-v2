import React, { useEffect, useState } from 'react';
import StatusCard from '../components/statusCard';

const StatusPage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  });

  return (
    <>
      <div className="status-page">
        <div>
          <div className="flex flex-row justify-center gap-8 text-4xl">
            <h2>Dnešní datum:</h2>
            <h2>{date.toLocaleDateString()}</h2>
            <h2>
              {`${
                date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
              }
                :
                ${
                  date.getMinutes() < 10
                    ? `0${date.getMinutes()}`
                    : date.getMinutes()
                }
                :
                ${
                  date.getSeconds() < 10
                    ? `0${date.getSeconds()}`
                    : date.getSeconds()
                }`}
            </h2>
          </div>
        </div>
        <div>
          <StatusCard workplace="Všeobecné sestry" supervisor="">
            <StatusCard.DayShift staff={[]} />
            <StatusCard.NightShift staff={[]} />
          </StatusCard>
        </div>
        <div>
          <StatusCard workplace="Vesnička" supervisor="">
            <StatusCard.DayShift staff={[]} />
            <StatusCard.NightShift staff={[]} />
          </StatusCard>
        </div>
        <div>
          <StatusCard workplace="1. patro" supervisor="">
            <StatusCard.DayShift staff={[]} />
            <StatusCard.NightShift staff={[]} />
          </StatusCard>
        </div>
        <div>
          <StatusCard workplace="Přízemí" supervisor="">
            <StatusCard.DayShift staff={[]} />
            <StatusCard.NightShift staff={[]} />
          </StatusCard>
        </div>
      </div>
    </>
  );
};

export default StatusPage;
