import { useEffect, useState } from 'react';
import Tile from './Tile';
import { clientApi } from '../features/api/api';

const Dashboard = () => {
    const useApi = new clientApi();
    const [employees, setEmployees] = useState(0);
    const [doctors, setDoctors] = useState(0);
    const [nurses, setNurses] = useState(0);
    const [announcements, setAnnouncements] = useState(0);
    const [admins, setAdmins] = useState(0);

    useEffect(() => {
        useApi.employee.getAll().then(res => setEmployees(res.length));
        useApi.employee.getByRole({ role: 'doctor' }).then(res => {
            setDoctors(res.length);
        });
        useApi.employee.getByRole({ role: 'nurse' }).then(res => {
            setNurses(res.length);
        });
        useApi.announcement.getAll().then(res => setAnnouncements(res.length));
        useApi.user.getAll().then(res => setAdmins(res.length));
    }, []);

    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <Tile title="Vedení" subtitle={employees} to="administration" />
                <Tile title="Lékaři" subtitle={doctors} to="doctor" />
                <Tile title="Sestřičky" subtitle={nurses} to="nurse" />
                <Tile
                    title="Události"
                    subtitle={announcements}
                    to="announcements"
                />
                <Tile title="Správci" subtitle={admins} to="admin" />
                <Tile title="Členové týmu" subtitle={0} to="info" />
            </div>
        </>
    );
};

export default Dashboard;
