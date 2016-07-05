var React = require('react');
var ReactDOM = require('react-dom');

var Calendar = require('./components/calendar/calendar');

var App = React.createClass({
  getInitialState: function() {
    return {
      events: [
        {
          name: 'engineering interview test prep',
          startDate: '2016-07-05T15:00:00.000Z',
          endDate: '2016-07-05T15:30:00.000Z'
        },
        {
          name: 'OOO for dentist',
          startDate: '2016-07-06T10:00:00.000Z',
          endDate: '2016-07-06T12:00:00.000Z'
        }
      ]
    }
  },
  render: function() { 
    return (
      <div className='app'>
        <Calendar events={this.state.events}/>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));