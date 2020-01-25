import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 180,
    zIndex: 9,
    position: 'relative'
  },
  round: {
    backgroundColor: colors.darkBlue,
    height: 1000,
    width: 1000,
    alignSelf: 'center',
    borderRadius: 1000,
    position: 'absolute',
    top: -820,
    zIndex: 2
  },
  logo: {
    marginLeft: 20,
    marginTop: -36,
    width: 170,
    height: 50
  },
  menuLang: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 20,
    marginTop: -18,
  },
  lang: {
    width: 32,
    height: 32
  }
});

export default styles;
