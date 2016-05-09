'use strict';

import React, {
  Component,
  View,
  WebView,
  Navigator,
} from 'react-native';

import AddressBar from './src/AddressBar';
import ToolBar from './src/ToolBar';

import styles from './src/styles';

const WEBVIEW_REF = 'webview';

export default class WebBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      url: nextProps.url
    });
  }

  goBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  goForward() {
    this.refs[WEBVIEW_REF].goForward();
  }

  load(url) {
    this.setState({
      url
    });
  }

  reload() {
    this.refs[WEBVIEW_REF].reload();
  }

  onNavigationStateChange(navigationState) {
    this.setState({
      backButtonEnabled: navigationState.canGoBack,
      forwardButtonEnabled: navigationState.canGoForward,
      url: navigationState.url,
      title: navigationState.title,
      loading: navigationState.loading,
      scalesPageToFit: true
    });
  }

  render() {
    return (
      <View style={styles.container} backgroundColor={this.props.backgroundColor}>
        <View style={styles.header}>
          <AddressBar
            url={this.state.url}
            title={this.state.title}
            onBack={this.goBack.bind(this)}
            backButtonEnabled={this.state.backButtonEnabled}
            forwardButtonEnabled={this.state.forwardButtonEnabled}
            onForward={this.goForward.bind(this)}
            onReload={this.reload.bind(this)}
            onLoad={(url)=>{this.load(url)}}
          />
        </View>
        <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{ uri: this.state.url }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />
        <ToolBar
          url={this.state.url}
          onBack={this.goBack.bind(this)}
          backButtonEnabled={this.state.backButtonEnabled}
          forwardButtonEnabled={this.state.forwardButtonEnabled}
          onForward={this.goForward.bind(this)}
          onReload={this.reload.bind(this)}
          onLoad={(url)=>{this.load(url)}}
        />
      </View>
    );
  }
}
