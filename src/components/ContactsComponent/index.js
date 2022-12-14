import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';

const ListEmptyComponent = () => {
  return (
    <View style={{paddingVertical: 100, paddingHorizontal: 20}}>
      <Message message="No contact found" primary />
    </View>
  );
};

const renderItem = ({item}) => {
  const {first_name, last_name, phone_number, country_code, profile_picture} = item;
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.item}>
        {
          profile_picture ? 
          <Image source={{uri: profile_picture}} style={styles.image} /> :
          <View style={styles.thumbnail}>
            <Text style={[styles.name, {color: 'white'}]}>{first_name[0]}</Text>
            <Text style={[styles.name, {color: 'white'}]}>{last_name[0]}</Text>
          </View>
        }
        <View style={{paddingLeft: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{first_name}</Text>
            <Text style={styles.name}> {last_name}</Text>
          </View>
          <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
        </View>
      </View>
      <Icon type={'ant'} name={'right'} size={14} color={colors.grey} />
    </TouchableOpacity>
  );
};

const ContactsComponent = ({modalVisible, setModalVisible, modalTitle, modalBody, modalFooter, loading, data}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalTitle={modalTitle}
        modalBody={modalBody}
        modalFooter={modalFooter}
      />

      {loading && (
        <View style={{paddingVertical: 100}}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
      )}

      {!loading && (
        <FlatList
          data={data} 
          renderItem={renderItem} 
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={ListEmptyComponent}
          ItemSeparatorComponent={()=> <View style={{height: 0.5, backgroundColor: colors.grey}}></View>}
          ListFooterComponent={()=> <View style={{height: 50}}></View>}
        />
      )}
    </View>
  )
}

export default ContactsComponent;