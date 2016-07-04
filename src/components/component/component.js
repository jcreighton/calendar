var React = require('react');
import styles from './component.css';

var Component = React.createClass({
  render: function() { 
    console.log('styles', styles.h2);
    return (
      <h2 className={styles.h2}>
        HEADER
      </h2>
    );
  }
});

module.exports = Component;