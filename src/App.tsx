import React from 'react';
import HomePage from './HomePage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  spacing: 4
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
