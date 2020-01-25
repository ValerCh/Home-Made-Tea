import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {Dimensions} from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',

    position: "relative",
    zIndex: 99,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8
  },
  bar: {
    backgroundColor: '#fff',
    height: screen.scale > 2 ? 110 : 60,
    alignSelf: "auto",
    flexDirection: 'row',
    width: "100%",
    justifyContent: "space-around",
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4
  },
  active: {
    color: colors.darkBlue
  },
  icon: {
    color: colors.lightGray
  }
});

export default styles;
