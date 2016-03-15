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

class ReactNativeCanvasTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Canvas
            context={{message: 'Hello!'}}
            render={this.renderCanvas}
            style={styles.webView}
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
    height: 200,
    width: 200
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
