import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/forecast" element={<Main />} />
      <Route path="*" element={<Navigate to="/forecast" />} />
    </Routes>
  );
};

export default AppRouter;
