import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
import MovieForm from '../MovieForm/MovieForm'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d32f2f"
    },
    secondary: {
      main: "#b0bec5"
    }
  }
});

function App() {
  return (
    <div className="App">
      <header className="movieHeader">
      <h1>The Movies Saga!</h1>
      </header>
      <Router>
      <ThemeProvider theme={theme}>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/movieForm">
          <MovieForm />
        </Route>
        </ThemeProvider>
      </Router>
    </div>
  );
}


export default App;
