import React from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: '10 30',
  },
};

class Nav extends React.Component {
  render() {
    return (
      <AppBar title="Pocket Trainer">
        <Tabs>
          <Tab label="Signup" style={styles.slide} />
          <Tab label="Login" style={styles.slide} />
          <Tab label="About" style={styles.slide} />
        </Tabs>
      </AppBar>
    );
  }
}

export default Nav;
