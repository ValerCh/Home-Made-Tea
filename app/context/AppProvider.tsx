import React from 'react';
import AppContext from './AppContext';
import {AsyncStorage} from 'react-native';

class AppProvider extends React.Component {

  state = {
    userData: null,
    lang: 'arm',
    country: null
  };

  setLanguage = lang => {
    console.log(lang);
    this.setState({lang});
    try {
      AsyncStorage.removeItem("appData", () => {
        AsyncStorage.setItem("appData", JSON.stringify(this.state)).then();
      }).then();
      AsyncStorage.setItem("appData", JSON.stringify(this.state)).then();
    } catch (error) {
      // Error saving data
    }
  };

  setCountry = country => {
    console.log("Setting Country:", country);
    this.setState({country});
    try {
      AsyncStorage.removeItem("appData", () => {
        AsyncStorage.setItem("appData", JSON.stringify(this.state)).then();
      }).then();

    } catch (error) {
      // Error saving data
    }

  };

  setUserData = userData => {
    this.setState({userData});
    console.log("Logging In:", userData);
    try {
      AsyncStorage.removeItem("appData", () => {
        AsyncStorage.setItem("appData", JSON.stringify(this.state)).then();
      }).then();
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          lang: this.state.lang,
          country: this.state.country,
          userData: this.state.userData,
          setLanguage: lang => {
            this.setLanguage(lang);
          },
          setCountry: country => {
            this.setCountry(country);
          },
          setUserData: userData => {
            this.setUserData(userData);
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
