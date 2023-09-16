import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { clientApi } from '@features/api/api';
import { Employee } from '@types';

/**
 * @author blaziter
 * @returns 
 */
export const Table = () => {
  const { role } = useParams();
  const useApi = new clientApi();
  const [employees, setEmployees] = useState<Employee[]>();

  useEffect(() => {
    useApi.employee.getAll().then(res => setEmployees(res));
  }, []);

  return (
    <>
      <table></table>
    </>
  );
};
