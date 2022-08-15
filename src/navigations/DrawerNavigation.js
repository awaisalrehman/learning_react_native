import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigation from "./HomeNavigation";
import { HOME_NAVIGATOR } from "../constants/routeNames";

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

    return <Drawer.Navigator screenOptions={{ header: () => null }}>
        <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigation} />
    </Drawer.Navigator>
}

export default DrawerNavigation;