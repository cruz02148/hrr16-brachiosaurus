import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styleButton = {
  margin: 12,
};

class QuestionAge extends React.Component {
  handleClickYoung() {
    this.props.answer.age = '18-30';
  }

  handleClickMiddle() {
    this.props.answer.age = '30-45';
  }

  handleClickOld() {
    this.props.answer.age = '45+';
  }

  render() {
    return (
      <div>
        <h2>How old are you?</h2>
        <RaisedButton
          onClick={this.handleClickYoung.bind(this)}
          label="18-30" primary style={styleButton}
        />
        <RaisedButton
          onClick={this.handleClickMiddle.bind(this)}
          label="30-45" secondary style={styleButton} 
        />
        <RaisedButton
          onClick={this.handleClickOld.bind(this)}
          backgroundColor="#a4c639" label="45+" style={styleButton} 
        />
      </div>
    );
  }
}

export default QuestionAge;
