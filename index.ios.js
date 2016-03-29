/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Canvas from './Canvas'

const DEFAULT_URL = "http://localhost:3000"

class ReactNativeCanvasTest extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Canvas
            context={{message: 'Hello!'}}
            render={this.renderCanvas}
            style={styles.webView}
            uri={DEFAULT_URL}
          />
        </View>
      </View>
    );
  }

  renderCanvas(context) {
    console.log('rendering the context', context)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  webView: {
    backgroundColor: '#ff0000',
    height: 768/2, // not sure I need to halve these??
    width: 1366/2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeCanvasTest', () => ReactNativeCanvasTest);
