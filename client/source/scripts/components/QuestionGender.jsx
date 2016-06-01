import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};


class QuestionGender extends React.Component {

  handleClickMale() {
    this.props.answer.gender = 'Male';
  }

  handleClickFemale() {
    this.props.answer.gender = 'Female';
  }

  render() {
    return (
      <div>
        <h2>What's your gender?</h2>
        <RaisedButton
          onClick={this.handleClickMale.bind(this)}
          label="Male" primary style={styleButton}
        />
        <RaisedButton
          onClick={this.handleClickFemale.bind(this)}
          label="Female" secondary style={styleButton}
        />
      </div>
    );
  }
}

export default QuestionGender;
