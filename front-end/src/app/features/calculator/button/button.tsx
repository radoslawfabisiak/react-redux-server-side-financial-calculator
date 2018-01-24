import * as React from 'react';

class Button extends React.Component<any, {}> {
  public render() {
    const {text, description} = this.props;
    return (
      <div className="component button">
        {description && <span className="description">{description}</span>}
        <button>{text}</button>
      </div>
    );
  }
}

export { Button };
