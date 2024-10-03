import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//  <BrowserRouter> allows you to handle dynamic routing and navigate between different views of your application 
//  without reloading the page.

//  The Routes component is a container that wraps multiple Route components.

// The Route component is used to define a single route in your application.


import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <BrowserRouter>
    {/* header */}
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<PrivateRoute />}>
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App