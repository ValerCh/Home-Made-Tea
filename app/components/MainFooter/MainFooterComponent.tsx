import React from 'react';
import I18n from '../../utils/I18n';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class MainFooterComponent extends React.Component {

  props: {
    navigation: any;
    active: string;
  };

  render() {
    I18n.locale = this.context.lang;
    return (
      <View style={styles.container}>
        <View style={styles.bar}>
          <TouchableOpacity
            style={styles.tab}
            onPress={this.props.navigation.navigate.bind(this, "HomeScreen")}
          >
            <Icon name="home" style={[styles.icon, this.props.active == 'home' ? styles.active : {}]} size={26} />
            <Text style={[styles.icon, this.props.active == 'home' ? styles.active : {}]}>{I18n.t("menu.home")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={this.props.navigation.navigate.bind(this, "MyPostScreen")}
          >
            <Icon name="bars" style={[styles.icon, this.props.active == 'posts' ? styles.active : {}]} size={26} />
            <Text style={[styles.icon, this.props.active == 'posts' ? styles.active : {}]}>{I18n.t("menu.posts")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={ this.props.navigation.navigate.bind(this, "MyAccountScreen")}
          >
            <Icon name="user-circle" style={[styles.icon, this.props.active == 'account' ? styles.active : {}]} size={26} />
            <Text style={[styles.icon, this.props.active == 'account' ? styles.active : {}]}>{I18n.t("menu.account")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MainFooterComponent;
