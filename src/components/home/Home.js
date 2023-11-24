import React from 'react';
import Header from '../Header/Header';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4">Welcome to the Home Page</Typography>
      </Container>
    </div>
  );
};

export default Home;
