'use strict';
import React, {
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Component
} from 'react-native';
import styles from './styles';
const TEXT_INPUT_REF = 'urlInput';

export default class AddressBar extends Component {
  constructor(props) {
    super(props);
    this.inputText = '';
    this.state = {
      url: this.props.url,
      title: this.props.title,
      backButtonEnabled: this.props.backButtonEnabled,
      forwardButtonEnabled: this.props.forwardButtonEnabled,
      onBack: this.props.onBack,
      onForward: this.props.onForward,
      editing: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      url: nextProps.url,
      title: nextProps.title,
      backButtonEnabled: nextProps.backButtonEnabled,
      forwardButtonEnabled: nextProps.forwardButtonEnabled,
      onBack: nextProps.onBack,
      onForward: nextProps.onForward
    });
  }

  handleTextInputChange(event) {
    let url = event.nativeEvent.text;
    if (!/^[a-zA-Z-_]+:/.test(url)) {
      url = 'http://' + url;
    }
    this.inputText = url;
  }

  onSubmitEditing(event) {
    this.load();
    this.setState({ editing: false });
  }

  load() {
    const url = this.inputText;
    if (url === this.props.url) {
      this.props.onReload();
    } else {
      this.props.onLoad(url);
    }
    // dismiss keyboard
    this.refs[TEXT_INPUT_REF].blur();
  }

  render() {
    return (
      <View style={styles.addressBarRow}>
        <TextInput
          ref={TEXT_INPUT_REF}
          autoCapitalize="none"
          defaultValue={this.state.editing ? this.state.url : this.state.title}
          onFocus={() => this.setState({ editing: true })}
          onSubmitEditing={this.onSubmitEditing.bind(this)}
          onChange={this.handleTextInputChange.bind(this)}
          clearButtonMode="while-editing"
          style={styles.addressBarTextInput}
        />
      </View>
    );
  }
}
