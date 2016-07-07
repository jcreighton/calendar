var React = require('react');

var Day = require('../day/day');
var styles = require('./week.css');

var Week = React.createClass({
  render: function() {
    var hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
      '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
    ];

    var { days, events } = this.props;

    return (
      <tr className={styles.week}>
        <td className={styles.hours}>{hours.map((hour, i) => <div key={i} className={styles.hour}>{hour}</div>)}</td>
        {days.map((day, i) => <Day key={i} events={events[day]} />)}
      </tr>
    );
  }
});

module.exports = Week;