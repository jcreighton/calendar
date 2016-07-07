var React = require('react');

var Event = require('../event/event');
var styles = require('./day.css');

var Day = React.createClass({
  render: function() {
    var events = null;

    if (this.props.events) {
      events = this.props.events.map((event, i) => <Event key={i} {...event} />);
    }

    return (
      <td className={styles.day}>
        {events}
      </td>
    );
  }
});

module.exports = Day;