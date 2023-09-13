import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminLayout from './AdminLayout';
import { clientApi } from 'features/api/api';
import { Employee } from 'types';

const Table = () => {
    const { role } = useParams();
    const useApi = new clientApi();
    const [employees, setEmployees] = useState<Employee[]>();

    useEffect(() => {
        useApi.employee.getAll().then(res => setEmployees(res));
    }, []);

    return (
        <>
            <AdminLayout>
                <table></table>
            </AdminLayout>
        </>
    );
};

export default Table;
