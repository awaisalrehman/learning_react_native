import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../redux/actions/AuthActions';

const AppNavContainer = () => {
    const auth = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch();

    return (
        <NavigationContainer>
            {auth.isLoggedIn ? <DrawerNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
}

export default AppNavContainer;