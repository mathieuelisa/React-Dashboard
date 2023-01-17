import React from 'react';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productsInputs, userInputs } from './mocks/NewUserMock';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          {/* Users route */}
          <Route path='/users' element={<List />} />
          <Route path='/users/:userId' element={<Single />} />
          <Route
            path='/users/new'
            element={<New inputs={userInputs} title={'Adding new user'} />}
          />
          {/* Products route */}
          <Route path='/products' element={<List />} />
          <Route path='/products/:productId' element={<Single />} />
          <Route
            path='/products/new'
            element={
              <New inputs={productsInputs} title={'Adding new product'} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
