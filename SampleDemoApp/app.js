'use strict';

import React, {
  Component,
  View
} from 'react-native';

import WebBrowser from './react-native-mybrowser/index';

export default class ReactNativeMybrowserDemo extends Component {
    render() {
      return (
        <WebBrowser
          url='https://facebook.github.io/react-native'
          backgroundColor='rgb(50, 180, 280)'
        />
      );
    }
}
