import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};

class QuestionAge extends React.Component {
  render() {
    return (
      <div>
        <h2>How old are you?</h2>
        <RaisedButton label="18-30" primary style={styleButton} />
        <RaisedButton label="30-45" secondary style={styleButton} />
        <RaisedButton backgroundColor="#a4c639" label="45+" style={styleButton} />
      </div>
    );
  }
}

export default QuestionAge;
