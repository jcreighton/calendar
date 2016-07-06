var React = require('react');
var classnames = require('classnames');
var styles = require('./event.css');

var Calendar = React.createClass({
  getDefaultProps: function() {
    return {
      top: '0',
      left: '0',
      width: '170',
      height: '46',
      title: 'event',
      start: '12pm',
      end: '1pm'
    }
  },
  render: function() { 
    var { 
      top, 
      left, 
      width,
      height,
      title,
      start,
      end } = this.props;

    var event = classnames(
      styles.event,
      {
        [styles.half]: (height < 46)
      }
    );

    console.log(event, height, top);

    return (
      <div className={event} style={{
        top: top + 'px', 
        left: left + 'px', 
        height: height + 'px', 
        width: width + 'px'}}>
        <span className={styles.time}>{start}-{end}</span>
        <span className={styles.title}>{title}</span>
      </div>
    );
  }
});

module.exports = Calendar;