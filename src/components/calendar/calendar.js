var React = require('react');
var styles = require('./calendar.css');

var Calendar = React.createClass({
  getDefaultProps: function() {
    return {
      days: ['Sun 7/3', 'Mon 7/4', 'Tue 7/5', 'Wed 7/6', 'Thu 7/7', 'Fri 7/8'],
      hours: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
        '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
      ],
      hourHeight: 46,
      halfHourHeight: 23
    }
  },
  render: function() { 
    return (
      <table className={styles.calendar}>
        <thead className={styles.header}>
          <tr>
            {this.props.days.map((day, i) => <th key={i}>{day}</th>)}
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr>
            <td className={styles.hours}>{this.props.hours.map((hour, i) => <div className={styles.hour} key={i}>{hour}</div>)}</td>
            {this.props.days.map((day, i) => {
              return (
                <td className={styles.day} key={i}>
                  <div className={styles.event} style={{top: (i * 46) + 'px'}}></div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  }
});

module.exports = Calendar;