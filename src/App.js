import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (values) => {
    if (values.username && values.password) {
      setIsAuthenticated(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login">
          <Login onSubmit={handleLogin} />
        </Route>
        <PrivateRoute
          path="/dashboard"
          component={() => <div>Dashboard</div>}
          isAuthenticated={isAuthenticated}
        />
        <Redirect from="/" to="/login" />
      </Routes>
    </Router>
  );
};

export default App;
