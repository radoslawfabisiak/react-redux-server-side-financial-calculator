import * as React from 'react';
import { connect } from 'react-redux';
import SliderBox from './slider-box/slider-box';
import { ResultBox } from './result-box/result-box';
import { Button } from './button/button';
import Message from './message/message';
import { getData } from './actions';

class Calculator extends React.Component<any, any> {
  public componentDidMount() {
    const { getData } = this.props;
    getData();
  }
  public render() {
    const { calculator } = this.props;
    // Preset
    const sliderBoxesList = [
      {title: 'Money amount', unit: 'Q', min: 200, max: 2500, value: calculator.amount},
      {title: 'Days', unit: 'Days', min: 7, max: 30, value: calculator.term},
    ];
    const resultBoxesList = [
      {name: 'Borrow', result: `$${calculator.amount}`, isBorder: true, isBold: false},
      {name: 'For', result: `${calculator.term} days`, isBorder: true, isBold: false},
      {name: 'Fee', result: `$${calculator.fee}`, isBorder: true, isBold: false},
      {name: 'Repay', result: `$${calculator.repay}`, isBorder: true, isBold: true},
      {name: 'Repayment date', result: `${calculator.repaymentDate}`, isBorder: false, isBold: true},
    ];
    // End of preset
    const sliderBoxes = sliderBoxesList.map((item) => {
      return (
        <SliderBox key={item.title} title={item.title} unit={item.unit} min={item.min} max={item.max} value={item.value}/>
      );
    });
    const resultBoxes = resultBoxesList.map((item) => {
      return (
        <ResultBox key={item.name} name={item.name} result={item.result} isBorder={item.isBorder} isBold={item.isBold}/>
      );
    });
    return (
      <div className="container">
        {calculator.alert && <Message/>}
        {sliderBoxes}
        {resultBoxes}
        <Button description={`You will return money in ${calculator.term} days from day of transfer to your account.`} text={'Apply now'}/>
      </div>
    );
  }
}

export interface DispatchProps {
  getData: () => {};
}

function mapStateToProps(state) {
  return {
    calculator: state.calculator,
    form: state.form,
  };
}

export default connect<any, DispatchProps, {}>(mapStateToProps, {
  getData,
})(Calculator);
