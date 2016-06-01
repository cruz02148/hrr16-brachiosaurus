import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};

class QuestionGoal extends React.Component {
  handleClickMuscle() {
    this.props.answer.goal = 'Build Muscle';
  }

  handleClickFat() {
    this.props.answer.goal = 'Lose Fat';
  }

  render() {
    return (
      <div>
        <h2>What is your goal?</h2>
        <RaisedButton
          onClick={this.handleClickMuscle.bind(this)}
          label="Build Muscle" primary style={styleButton}
        />
        <RaisedButton
          onClick={this.handleClickFat.bind(this)}
          label="Lose Fat" secondary style={styleButton}
        />
      </div>
    );
  }
}

export default QuestionGoal;
