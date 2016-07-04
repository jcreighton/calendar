var React = require('react');
var styles = require('./component.css');

var Component = React.createClass({
  render: function() { 
    return (
      <h2 className={styles.h2}>
        HEADER
      </h2>
    );
  }
});

module.exports = Component;