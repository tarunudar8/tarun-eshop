import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Home = () => {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
          </Toolbar>
        </AppBar>
        <Container>
          <Typography variant="h4">Welcome to the Home Page</Typography>
        </Container>
      </div>
    );
  };
  
  export default Home;