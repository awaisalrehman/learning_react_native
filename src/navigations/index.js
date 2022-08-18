import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';

const AppNavContainer = () => {
  const auth = useSelector(state => state.AuthReducer);

  return (
    <NavigationContainer>
      {auth.isLoggedIn ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
