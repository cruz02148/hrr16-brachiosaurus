import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};

class QuestionGender extends React.Component {
  render() {
    return (
      <div>
        <h2>What's your gender?</h2>
        <RaisedButton label="Male" primary style={styleButton} />
        <RaisedButton label="Female" secondary style={styleButton} />
      </div>
    );
  }
}

export default QuestionGender;
