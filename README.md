# react-native-mybrowser

A web browser component for React Native.

## Install

```
npm install react-native-mybrowser
```

## Usage

```javascript
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
```

## Required props

|props          |description                              |
|---            |---                                      |
|url            |web address                              |
|backgroundColor|background color of the header and footer|

## Sample

![](./assets/images/Simulator Screen Shot May 10, 2016, 12.26.03 AM.png)
