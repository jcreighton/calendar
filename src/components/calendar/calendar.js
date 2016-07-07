var moment = require('moment');
require('moment-range');
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
      height: 46
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
      var start = moment.utc(event.startDate);
      var end = moment.utc(event.endDate);
      var range = moment.range(event.startDate, event.endDate);
      var duration = range.diff('minutes');
      var date = start.format('ddd M/D');

      // Determine height based on duration of event
      var height = (duration / 30) * (this.props.height / 2)

      // Determine top position based on hour + minutes
      var hour = parseInt(start.format('HH'), 10);
      var minutes = start.format('mm') === '30' ? .5 : 0;
      var top = (hour + minutes) * this.props.height;

      var newEvent = { 
        startDate: event.startDate,
        endDate: event.endDate,
        title: event.name,
        start: start.format('h:mma'),
        end: end.format('h:mma'),
        duration,
        height,
        top
      };

      if (!events[date]) {
        events[date] = [];
      }

      // Loop through previous to decide of there's overlapping
      if (events[date].length) {
        events[date].forEach((event) => {
          let previousRange = moment.range(event.startDate, event.endDate);
          let isOverlapping = previousRange.overlaps(range);
          if (isOverlapping) {
            event.width = 80;
            newEvent.width = 80;
            newEvent.left = 92;
          }
        });
      }

      events[date].push(newEvent); 
    });

    this.setState({
      events,
      days
    });
  },
  render: function() { 
    return (
      <table className={styles.calendar}>
        <thead className={styles.header}>
          <tr>
            {this.state.days.map((day, i) => <th key={i}>{day}</th>)}
          </tr>
        </thead>
        <tbody className={styles.body}>
          <tr>
            <td className={styles.hours}>{this.state.hours.map((hour, i) => <div className={styles.hour} key={i}>{hour}</div>)}</td>
            {this.state.days.map((day, i) => {
              var events = this.state.events[day];

              return (
                <td className={styles.day} key={i}>
                  { 
                    events && events.map((event, i) => {
                      return <Event key={i} {...event} />
                    })
                  }
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