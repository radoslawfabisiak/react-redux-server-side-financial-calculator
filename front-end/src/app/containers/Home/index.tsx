import * as React from 'react';
import Calculator from '../../features/calculator/calculator';

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <Calculator/>
      </div>
    );
  }
}

export { Home };
