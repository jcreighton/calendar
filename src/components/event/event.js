var React = require('react');
var styles = require('./event.css');

var Calendar = React.createClass({
  getDefaultProps: function() {
    return {
      top: '0px',
      left: '0px',
      width: '170px',
      height: '46px',
      title: 'event',
      start: '12p',
      end: '1p'
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

    return (
      <div className={styles.event} style={{top, left, height, width}}>
        <span className={styles.time}>{start}-{end}</span>
        <span className={styles.title}>{title}</span>
      </div>
    );
  }
});

module.exports = Calendar;