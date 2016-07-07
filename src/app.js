var React = require('react');
var ReactDOM = require('react-dom');

var Calendar = require('./components/calendar/calendar');

var App = React.createClass({
  getInitialState: function() {
    return {
      events: [
        {
          name: 'deny listening to Taylor Swift',
          startDate: '2016-07-05T15:00:00.000Z',
          endDate: '2016-07-05T15:30:00.000Z'
        },
        {
          name: 'google random stuff',
          startDate: '2016-07-05T12:00:00.000Z',
          endDate: '2016-07-05T13:30:00.000Z'
        },
        {
          name: 'write up puns',
          startDate: '2016-07-06T10:00:00.000Z',
          endDate: '2016-07-06T12:00:00.000Z'
        },
        {
          name: 'Dashunds: The Long & Short of It',
          startDate: '2016-07-06T10:30:00.000Z',
          endDate: '2016-07-06T13:00:00.000Z'
        },
        {
          name: 'dance party',
          startDate: '2016-07-02T13:00:00.000Z',
          endDate: '2016-07-02T15:00:00.000Z'
        },
        {
          name: 'binge watch OINTB',
          startDate: '2016-07-07T06:30:00.000Z',
          endDate: '2016-07-07T18:00:00.000Z'
        },
        {
          name: 'still binge watching OINTB',
          startDate: '2016-07-08T08:30:00.000Z',
          endDate: '2016-07-08T20:30:00.000Z'
        },
        {
          name: 'stand in line at Shake Shack',
          startDate: '2016-07-04T13:00:00.000Z',
          endDate: '2016-07-04T13:30:00.000Z'
        },
        {
          name: 'coffee o\' clock',
          startDate: '2016-07-09T08:00:00.000Z',
          endDate: '2016-07-09T12:30:00.000Z'
        },
        {
          name: '#blessed',
          startDate: '2016-07-09T09:00:00.000Z',
          endDate: '2016-07-09T15:30:00.000Z'
        }
      ]
    }
  },
  componentDidMount: function() {
    // Make fake API call
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