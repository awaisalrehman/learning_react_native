import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Container from '../../components/common/container';
import {LOGOUT, SETTINGS} from '../../constants/routeNames';
import styles from './styles';
import {userLogout} from '../../redux/actions/auth/login';
import Icon from '../../components/common/icon';

const SideMenu = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure, you want to logout?', [
      {
        text: 'Cancle',
        onPress: () => {},
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(userLogout());
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="fontisto" name="player-settings" size={17} />,
      name: SETTINGS,
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="materialCommunity" name="logout" size={17} />,
      name: LOGOUT,
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <View style={{paddingHorizontal: 70}}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity key={name} onPress={onPress} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
