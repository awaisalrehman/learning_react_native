import React from "react";
import { useDispatch } from "react-redux";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import HomeNavigation from "./HomeNavigation";
import { HOME_NAVIGATOR, LOGOUT } from "../constants/routeNames";
import { userLogout } from "../redux/actions/AuthActions";



function CustomDrawerContent(props) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLogout());
    }

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label={LOGOUT} onPress={logout} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();
    

    return <Drawer.Navigator screenOptions={{ header: () => null, swipeEdgeWidth: 100 }} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigation} />
    </Drawer.Navigator>
}

export default DrawerNavigation;