var React = require('react');
var ReactDOM = require('react-dom');

var Component = require('./components/component/component');

var App = React.createClass({
  render: function() { 
    return (
      <div className='app'>
        APP
        <Component />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));