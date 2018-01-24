import * as React from 'react';
import { connect } from 'react-redux';
import { calculate, showAlert } from '../actions';

class SliderBox extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  public handleChange = (event) => {
    const { unit, calculator, calculate } = this.props;
    let values;
    if (unit === 'Q') {
      values = {
        amount: event.target.value,
        term: calculator.term,
      };
    } else {
      values = {
        amount: calculator.amount,
        term: event.target.value,
      };
    }
    calculate(values);
  }
  public render() {
    const { title, min, max, value, unit } = this.props;
    return (
      <div className="component slider_box">
        <span className="title">{title}</span>
        <div className={`number ${unit}`}>
          <input type="number" min={min} max={max} value={value} onChange={this.handleChange}/>
        </div>
        <div className="clearfix" />
        <input className="range" type="range" min={min} max={max} value={value} onChange={this.handleChange}/>
        <span className="min">{min}</span>
        <span className="max">{max}</span>
        <div className="clearfix" />
      </div>
    );
  }
}

export interface DispatchProps {
  calculate: () => {};
  showAlert: (argument) => {};
}

function mapStateToProps(state) {
  return {
    calculator: state.calculator,
  };
}

export default connect<any, DispatchProps, any>(mapStateToProps, {
  calculate,
  showAlert,
})(SliderBox);
