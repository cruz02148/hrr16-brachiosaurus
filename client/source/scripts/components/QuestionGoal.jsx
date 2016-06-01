import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};

class QuestionGoal extends React.Component {
  render() {
    return (
      <div>
        <h2>What is your goal?</h2>
        <RaisedButton label="Build Muscle" primary style={styleButton} />
        <RaisedButton label="Lose Fat" secondary style={styleButton} />
      </div>
    );
  }
}

export default QuestionGoal;
