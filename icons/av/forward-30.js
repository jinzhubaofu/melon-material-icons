'use strict';

var React = require('react');
var mui = require('material-ui');
var SvgIcon = mui.SvgIcon;

var AvForward30 = React.createClass({
  displayName: 'AvForward30',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement(
        'defs',
        null,
        React.createElement('path', { id: 'a', d: 'M24 24H0V0h24v24z' })
      ),
      React.createElement(
        'clipPath',
        { id: 'b' },
        React.createElement('use', { overflow: 'visible' })
      ),
      React.createElement('path', { d: 'M9.6 13.5h.4c.2 0 .4-.1.5-.2s.2-.2.2-.4v-.2s-.1-.1-.1-.2-.1-.1-.2-.1h-.5s-.1.1-.2.1-.1.1-.1.2v.2h-1c0-.2 0-.3.1-.5s.2-.3.3-.4.3-.2.4-.2.4-.1.5-.1c.2 0 .4 0 .6.1s.3.1.5.2.2.2.3.4.1.3.1.5v.3s-.1.2-.1.3-.1.2-.2.2-.2.1-.3.2c.2.1.4.2.5.4s.2.4.2.6c0 .2 0 .4-.1.5s-.2.3-.3.4-.3.2-.5.2-.4.1-.6.1c-.2 0-.4 0-.5-.1s-.3-.1-.5-.2-.2-.2-.3-.4-.1-.4-.1-.6h.8v.2s.1.1.1.2.1.1.2.1h.5s.1-.1.2-.1.1-.1.1-.2v-.5s-.1-.1-.1-.2-.1-.1-.2-.1h-.6v-.7zm5.7.7c0 .3 0 .6-.1.8l-.3.6s-.3.3-.5.3-.4.1-.6.1-.4 0-.6-.1-.3-.2-.5-.3-.2-.3-.3-.6-.1-.5-.1-.8v-.7c0-.3 0-.6.1-.8l.3-.6s.3-.3.5-.3.4-.1.6-.1.4 0 .6.1.3.2.5.3.2.3.3.6.1.5.1.8v.7zm-.9-.8v-.5s-.1-.2-.1-.3-.1-.1-.2-.2-.2-.1-.3-.1-.2 0-.3.1l-.2.2s-.1.2-.1.3v2s.1.2.1.3.1.1.2.2.2.1.3.1.2 0 .3-.1l.2-.2s.1-.2.1-.3v-1.5zM4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8z', 'clip-path': 'url(#b)' })
    );
  }

});

module.exports = AvForward30;