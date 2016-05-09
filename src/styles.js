import { StyleSheet } from 'react-native';

const HEADER = 'rgb(240, 240, 240)';
const BGWASH = 'rgb(255, 255, 255)';
const ELEMENT_MARGIN = 8;
const SHADOW_COLOR = '#333';
const SHADOW_OPACITY = 0.4;
const SHADOW_RADIUS = 1;
const DISABLED_WASH = 'rgba(255,255,255,0.25)';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    transform: [{'translate':[0,0,1]}], /* bring view to front */
    shadowColor:SHADOW_COLOR,
    shadowOpacity:SHADOW_OPACITY,
    shadowRadius:SHADOW_RADIUS,
    shadowOffset: { height:1, width: 0 },
    paddingTop: 20,
  },
  addressBarRow: {
    flexDirection: 'row',
    marginTop: ELEMENT_MARGIN/2,
    marginBottom: ELEMENT_MARGIN/2,
    marginLeft: ELEMENT_MARGIN,
    marginRight: ELEMENT_MARGIN,
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350,
  },
  addressBarTextInput: {
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    flex: 1,
    fontSize: 14,
  },
  button: {
    width:20,
    height:20,
    marginRight: ELEMENT_MARGIN,
    marginTop: 5,
    marginLeft: 3,
    opacity: 0.9,
  },
  toolBar: {
    paddingTop:ELEMENT_MARGIN,
    paddingBottom:ELEMENT_MARGIN,
    height: 40,
    flexDirection:'row',
    justifyContent:'space-around',
  },
});
