var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
// var expectJSX = require('expect-jsx');
var Day = require('./day');

// expect.extend(expectJSX);

describe('event', function () {
  it('renders without problems', function () {
    var day = TestUtils.renderIntoDocument(<Day/>);
    expect(day).toExist();
  });
});