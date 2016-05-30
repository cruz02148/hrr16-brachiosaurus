import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { teal500 } from 'material-ui/styles/colors';

const stylePaper = {
  height: 500,
  width: 500,
  margin: '30',
  position: 'absolute',
  left: '25%',
  textAlign: 'center',
  display: 'inline-block',
  color: teal500,
};

const styleButton = {
  margin: 12,
};

class PromptBox extends React.Component {
  render() {
    return (
      <div>
        <Paper style={stylePaper} zDepth={3}>
          <div>
            <h2>What's your gender?</h2>
            <RaisedButton label="Male" primary style={styleButton} />
            <RaisedButton label="Female" secondary style={styleButton} />

            <h2>How old are you?</h2>
            <RaisedButton label="18-30" primary style={styleButton} />
            <RaisedButton label="30-45" secondary style={styleButton} />
            <RaisedButton backgroundColor="#a4c639" label="45+" style={styleButton} />

            <h2>What is your goal?</h2>
            <RaisedButton label="Build Muscle" primary style={styleButton} />
            <RaisedButton label="Lose Fat" secondary style={styleButton} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default PromptBox;
