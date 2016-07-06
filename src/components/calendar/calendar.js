var moment = require('moment');
var React = require('react');

var Event = require('../event/event');
var styles = require('./calendar.css');

var Calendar = React.createClass({
  getInitialState: function() {
    return {
      hours: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
        '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
      ]
    }
  },
  getDefaultProps: function() {
    return {
      fullHeight: 46,
      halfHeight: 23
    }
  },
  componentWillMount: function() {
    // Create array of days for calendar header
    var day;
    var days = [];
    var sunday = moment().day(0);

    days.push(sunday.format('ddd M/D'));

    for (var i = 1; i < 7; i++) {
      day = sunday.add(1, 'days')
      days.push(day.format('ddd M/D'));
    }

    // Munge events
    var events = {};
    this.props.events.forEach((event) => { 
      var start = moment(event.startDate);
      var end = moment(event.endDate);
      var date = start.format('ddd M/D');

        events[date] = { 
        title: event.name,
        date,
        startTime: start.format('HH:mmA'),
        endTime: end.format('HH:mmA'),
        duration: end.diff(start, 'minutes')
      }; 
    });

    this.setState({
      events,
      days
    });
  },
  render: function() { 
    // console.log(this.state.days, this.props);
    return (
      <table className={styles.calendar}>
        <thead className={styles.header}>
          <tr>
            {this.state.days.map((day, i) => <th key={i}>{day}</th>)}
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr>
            <td className={styles.hours}>{this.props.hours.map((hour, i) => <div className={styles.hour} key={i}>{hour}</div>)}</td>
            {this.state.days.map((day, i) => {
              return (
                <td className={styles.day} key={i}>
                  <Event top={day.top + 'px'} height={46 + 'px'} />
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