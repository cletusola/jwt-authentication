import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './utils/privateRoute';
import { AuthProvider } from './context/AuthContect';

function App() {
  return (
      <React.Fragment>
        <Router>
          <AuthProvider>
          <Header />
          <Routes> 
            <Route  exact path='/' element={<PrivateRoute />}>
              <Route exact path='/' element={<Home />} />
            </Route>
            <Route exact path='/login' element={<Login />} />
          </Routes>
          </AuthProvider>
        </Router>
      </React.Fragment>
  );
}

export default App;
