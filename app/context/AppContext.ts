import React from 'react';

interface AppContextInterface {
  userData: any,
  lang: string,
  country: string,
  setLanguage: any,
  setCountry: any,
  setUserData: any
}

const AppContext = React.createContext<AppContextInterface | null>({
  userData: null,
  lang: null,
  country: null,
  setLanguage: (lang) => { },
  setCountry: (country) => { },
  setUserData: (userData) => { }
});

export default AppContext
