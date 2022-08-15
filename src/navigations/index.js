import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';

const AppNavContainer = () => {
    const isLoggedin = true;
    return (
        <NavigationContainer>
            {isLoggedin ? <DrawerNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
}

export default AppNavContainer;