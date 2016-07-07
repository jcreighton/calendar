var React = require('react');
var styles = require('./header.css');

var Header = React.createClass({        
  render: function() {
     var { days } = this.props;

    return (
      <thead className={styles.header}>
        <tr>
          {days.map((day, i) => <th key={i}>{day}</th>)}
        </tr>
      </thead>
    );       
  }
});

module.exports = Header;