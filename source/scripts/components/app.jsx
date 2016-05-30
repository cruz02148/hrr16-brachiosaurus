import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from './header.jsx';
import PromptBox from './prompt.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Nav />
          <PromptBox />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
