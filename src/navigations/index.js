import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

const AppNavContainer = () => {
  const auth = useSelector(state => state.AuthReducer);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {!authLoaded ? (
        <ActivityIndicator size={'large'} style={{marginTop: 100}} />
      ) : (
        <NavigationContainer>
          {auth.isLoggedIn || isAuthenticated ? (
            <DrawerNavigation />
          ) : (
            <AuthNavigation />
          )}
        </NavigationContainer>
      )}
    </>
  );
};

export default AppNavContainer;
