import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Navi from './Navi/Navi';
import Sign from './Sign/Sign';

const Router = () => {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign' element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
