import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Experiment from 'react-ab-test/lib/Experiment';
import Variant from 'react-ab-test/lib/Variant';

http.createServer((req, res) => {
  let Component = React.createClass({
    propTypes: {
      userIdentifier: React.PropTypes.string.isRequired
    },
    render: function(){
      return <div>
        <Experiment ref="experiment" name="My Example" userIdentifier={this.props.userIdentifier}>
          <Variant name="A">
            <div>Section A</div>
          </Variant>
          <Variant name="B">
            <div>Section B</div>
          </Variant>
        </Experiment>
      </div>;
    }
  });

  let reactElement = React.createElement(Component, {userIdentifier: '12345'});
  let reactString = ReactDOMServer.renderToString(reactElement);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(reactString);
}).listen(3000, '0.0.0.0');

console.log('Server running at http://0.0.0.0:3000/');
