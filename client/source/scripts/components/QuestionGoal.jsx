import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};


class QuestionGoal extends React.Component {
  
  handleClickMuscle() {
    this.props.answer.goal = 'Build Muscle';
    this.checkAnswers();
  }

  handleClickFat() {
    this.props.answer.goal = 'Lose Fat';
    this.checkAnswers();
  }

  checkAnswers() {
    const gender = this.props.answer.gender;
    const goal = this.props.answer.goal;
    const result =  gender === 'Male' && goal === 'Build Muscle' ? 'Send the Hard Workout' :
                    gender === 'Male' && goal === 'Lose Fat' ? 'Send the Normal Workout' :
                    gender === 'Female' && goal === 'Build Muscle' ? 'Send the Easy workout' :
                    'Send the Fat Loss Workout';
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
