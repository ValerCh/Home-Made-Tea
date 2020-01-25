import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between"
  },
  content: {
    display: "flex",
    width: "100%"
  },
  myAccount: {
    flexDirection: "row",
    // borderBottomColor: '#efefef',
    // borderBottomWidth: 1,
    width: '100%',
    marginLeft: 22
  },
  title: {
    fontSize: 19,
    fontFamily: "SF-Compact-Rounded-Semibold",
    letterSpacing: 0.4,
    marginBottom: 5
  },
  setting: {
    marginTop: 12,
    // marginLeft: 20
    paddingRight: 22,
    paddingLeft: 22
  },
  settings: {
    fontSize: 16,
    fontFamily: "SF-Compact-Rounded-Light",
    color: colors.darkest,
    paddingBottom: 10 + (screen.height - 640) / 16
  },
  languageChange: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  langTitle: {
    fontSize: 16,
    fontFamily: "SF-Compact-Rounded-Light",
    color: colors.darkest,
    marginBottom: 4,
    paddingBottom: 10 + (screen.height - 640) / 16
  },
  btn: {},
  langSelect: {}


});

export default styles;
