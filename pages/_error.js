/* 
  CUSTOM ERROR HANDLING
  
  404 or 500 errors are handled on server and client by error.js, this file will override it.
  You are free to remove this file if you don't want to implement custom Error Component.
  This Component will be used only on production, development mode will display errors.
*/

import React from 'react';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

export default Error;