'use strict';

import React, {
  Component,
  View,
  TouchableOpacity,
  Text,
  Image,
  NavigatorIOS,
  StatusBarIOS
} from 'react-native';
const NAVIGATOR_REF = 'navigator';
import styles from './styles';

export default class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.inputText = '';
    this.state = ToolBar.updateState(this.props);
  }

  static updateState(props) {
    return {
      backButtonEnabled: props.backButtonEnabled,
      forwardButtonEnabled: props.forwardButtonEnabled,
      onBack: props.onBack,
      onForward: props.onForward
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(ToolBar.updateState(nextProps));
  }

  render() {
    return (
      <View style={styles.toolBar}>
        <TouchableOpacity
          onPress={this.state.onBack}>
          <Text
            style={styles.button}>
            {'<'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.state.onForward}>
          <Text
            style={styles.button}>
            {'>'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
