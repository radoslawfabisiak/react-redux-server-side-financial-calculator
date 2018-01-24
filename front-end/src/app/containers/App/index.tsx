const appConfig = require('../../../../config/main');

import * as React from 'react';
import { Helmet } from 'react-helmet';

require('../../stylesheets/main.scss');

class App extends React.Component<any, any> {
  public render() {
    return (
      <section>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        {this.props.children}
      </section>
    );
  }
}

export { App }
