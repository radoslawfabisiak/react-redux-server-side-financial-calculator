import * as React from 'react';
import { connect } from 'react-redux';
import { showAlert } from '../actions';

class Message extends React.Component<any, {}> {
  public render() {
    const {calculator, showAlert} = this.props;
    return (
      <div className="component message">
        <span className="close" onClick={showAlert.bind(this, false)}>x</span>
        <span className="text">{calculator.alert}</span>
      </div>
    );
  }
}

export interface DispatchProps {
  showAlert: (argument) => {};
}

function mapStateToProps(state) {
  return {
    calculator: state.calculator,
  };
}

export default connect<any, DispatchProps, {}>(mapStateToProps, {
  showAlert,
})(Message);
