import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
    ErrorPage,
    EventsPage,
    HomePage,
    InformationPage,
    StatusPage,
} from '@pages';
import '../App.css';
import { Admin, Layout, Login, Table } from '@components';
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({});

const App = () => {
    return (
        <MantineProvider theme={theme}>
            <Layout>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="login" element={<Login />} />
                    <Route path="information" element={<InformationPage />} />
                    <Route path="status" element={<StatusPage />} />
                    <Route path="events" element={<EventsPage />} />
                    <Route path="table">
                        <Route path=":role">
                            <Route path="page/:page" />
                            <Route path="edit/:uuid" />
                        </Route>
                    </Route>
                    <Route path="admin">
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Admin />} />
                        <Route path="table/:role/:page" element={<Table />} />
                        <Route path="create">
                            <Route path="event" />
                            <Route path="member" />
                            <Route path="team-member" />
                        </Route>
                        <Route path="edit">
                            <Route path=":role/:uuid" />
                        </Route>
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Layout>
        </MantineProvider>
    );
};

export default App;
