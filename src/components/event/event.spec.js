var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
// var expectJSX = require('expect-jsx');
var Event = require('./event');

// expect.extend(expectJSX);

describe('event', function () {
  it('renders without problems', function () {
    var event = TestUtils.renderIntoDocument(<Event/>);
    expect(event).toExist();
  });
});