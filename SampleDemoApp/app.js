'use strict';

import React, {
  Component,
  View
} from 'react-native';

import WebBrowser from 'react-native-mybrowser';

export default class SampleDemoApp extends Component {
    render() {
      return (
        <WebBrowser
          url='https://facebook.github.io/react-native'
        />
      );
    }
}
