import * as React from 'react';

class ResultBox extends React.Component<any, {}> {
  public render() {
    const {name, result, isBold, isBorder} = this.props;
    return (
      <div className="component result_box">
        <div className={isBorder ? 'has_border' : ''}>
          <div className={`name ${isBold ? 'is_bold' : ''}`}>{name}</div>
          <div className={`result ${isBold ? 'is_bold' : ''}`}>{result}</div>
          <div className="clearfix"/>
        </div>
      </div>
    );
  }
}

export { ResultBox };
