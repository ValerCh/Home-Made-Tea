import * as React from 'react';
import AppContext from '../../context/AppContext';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import MainHeaderComponent from '../../components/MainHeader/MainHeaderComponent';
import styles from './styles';
import {TouchableOpacity, View, Text} from 'react-native';
import I18n from '../../utils/I18n';
import {Snackbar} from 'react-native-paper';
import MainFooterComponent from '../../components/MainFooter/MainFooterComponent';

interface Props extends NavigationStackScreenProps {
}

class HomeScreen extends React.Component {

  static contextType = AppContext;
  static navigationOptions = {
    header: null
  };
  props: Props;
  state: any = {
    restart: false,
    message: ''
  };

  _handleLogout = () => {
    this.context.setUserData(null);
    this.props.navigation.navigate("LoginScreen")
  };

  _handleLangChange = (lang) => {
    if (lang !== 'arm') {
      this.setState({restart: true, message: 'Пожалуйста, перезапустите приложение!'});
    } else {
      this.setState({restart: true, message: 'Խնդրում եմ, կրկին վերբեռնել հավելվածը!'});
    }
  };

  render() {
    I18n.locale = this.context.lang;
    return (
      <View style={styles.container}>
        <View>
          <MainHeaderComponent/>
        </View>
        <View>
          <View style={styles.content}>
            <View style={styles.myAccount}>
              <Text style={styles.title}>
                {I18n.t("homeScreen.myAccount")}
              </Text>
            </View>
            <View style={styles.setting}>
              <Text
                onPress={() => this.props.navigation.navigate("SettingsScreen")}
                style={styles.settings}
              >
                {I18n.t("homeScreen.settings")}
              </Text>
              <Text
                onPress={() =>
                  this.props.navigation.navigate("ChangeCountryScreen")
                }
                style={styles.settings}
              >
                {I18n.t("homeScreen.country")}
              </Text>
              <View style={styles.languageChange}>
                <View>
                  <Text style={styles.langTitle}>
                    {I18n.t("homeScreen.language")}
                  </Text>
                </View>
                <View>
                  {/*<LangSliderComponent languageChange={this._handleLangChange.bind(this)}></LangSliderComponent>*/}
                </View>
              </View>
              <Text
                onPress={() =>
                  this.props.navigation.navigate("AboutUsScreen")
                }
                style={styles.settings}
              >
                {I18n.t("homeScreen.aboutUs")}
              </Text>
              <Text style={styles.settings}>
                {I18n.t("homeScreen.contactUs")}
              </Text>
              {this.context.userData ? (
                <TouchableOpacity
                  onPress={() => this._handleLogout()}
                >
                  <Text style={styles.settings}>
                    {I18n.t("homeScreen.logout")}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("LoginScreen")}
                >
                  <Text style={styles.settings}>
                    {I18n.t("homeScreen.login")}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <Snackbar
              visible={this.state.restart}
              duration={5000}
              onDismiss={() => this.setState({restart: false})}
            >
              {this.state.message}
            </Snackbar>
          </View>
        </View>
        <MainFooterComponent
          navigation={this.props.navigation}
          active="account"
        />
      </View>
    );
  }

}

export default HomeScreen;
