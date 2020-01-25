import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

class MainHeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
          <View style={styles.menuLang}>
            <Image
              style={styles.lang}
              source={require('../../../assets/arm-flag.png')}
            />
          </View>
        </View>
        <View style={styles.round}>

        </View>
      </View>
    );
  }
}

export default MainHeaderComponent;
