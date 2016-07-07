var moment = require('moment');
require('moment-range');
var React = require('react');

var Header = require('../header/header');
var Week = require('../week/week');
var styles = require('./calendar.css');

var Calendar = React.createClass({
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
      // If overlap is found, adjust width for both events & left position for 2nd event
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
    var { days, events } = this.state;

    return (
      <table className={styles.calendar}>
        <Header days={days} />
        <tbody className={styles.body}>
          <Week days={days} events={events} />
        </tbody>
      </table>
    );
  }
});

module.exports = Calendar;