import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigation from './HomeNavigation';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import SideMenu from './SideMenu';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  const getDrawerContent = navigation => {
    return <SideMenu navigation={navigation} />;
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 100,
        drawerType: 'slide',
        header: () => null,
      }}
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
