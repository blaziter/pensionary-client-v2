import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Admin, Layout, Login, Table } from '@components';
import {
  ErrorPage,
  EventsPage,
  HomePage,
  InformationPage,
  StatusPage,
} from '@pages';
import '../App.css';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="public">
          <Route path="information" element={<InformationPage />} />
          <Route path="status" element={<StatusPage />} />
          <Route path="events" element={<EventsPage />} />
        </Route>
        <Route path="admin">
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Admin />} />
          <Route path="table">
            <Route path=":role">
              <Route path="page/:page" element={<Table />} />
              <Route path="edit/:uuid" />
            </Route>
          </Route>
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
  );
};
