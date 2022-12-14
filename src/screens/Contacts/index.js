import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../components/common/Icon';
import ContactsComponent from '../../components/ContactsComponent';
import getContacts from '../../redux/actions/contacts/getContacts';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const {getContacts: {loading, data}} = useSelector(state => state.ContactReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getContacts()(dispatch);
  }, []);

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
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modalTitle={'My Profile!'}
      modalBody={<View><Text>Hello World!</Text></View>}
      // modalFooter={<></>}
      data={data}
      loading={loading}
    />
  );
};

export default Contacts;
