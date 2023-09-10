import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import axios from 'axios';
import AdminLayout from './AdminLayout';
import { clientApi } from '../features/api/api';

const Table = () => {
    const { role } = useParams();
    const useApi = new clientApi();

    const employees = useMemo(() => useApi.employee.getAll(), []);

    return (
        <>
            <AdminLayout>
                <table></table>
            </AdminLayout>
        </>
    );
};

export default Table;
