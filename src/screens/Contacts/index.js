import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/container';
import Icon from '../../components/common/icon';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Icon
            type="ionicon"
            name="menu"
            size={25}
            style={{padding: 15, color: 'black'}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Container>
      <Text>Contact List Screen</Text>
    </Container>
  );
};

export default Contacts;
