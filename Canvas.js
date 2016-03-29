'use strict';

var React = require('react-native');
var {
  View,
  WebView
} = React;

var Canvas = React.createClass({

  propTypes: {
    context: React.PropTypes.object,
    render: React.PropTypes.func.isRequired
  },

  render() {

    var contextString = JSON.stringify(this.props.context);
    var renderString = this.props.render.toString();

    // var htmlString = ""
    // htmlString += "<style>*{margin:0;padding:0;}canvas{position:absolute;transform:translateZ(0);}</style>"
    // htmlString += '<div id="content"></div>'
    // htmlString += '<script src="./scripts/phaser.min.js"></script>'
    // htmlString += '<script src="./scripts/game.js"></script>'
    // htmlString += '<script>var game = new Phaser.Game(1366, 768, Phaser.AUTO, "content", null, false, true, null)</script>'

    console.log('ohhhh')
    return (
      <View>
        <WebView
          automaticallyAdjustContentInsets={false}
          contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
          source={
            {
              uri: this.props.uri
            }
          }
          style={this.props.style}
        />
      </View>
    );
  }
});

module.exports = Canvas;
