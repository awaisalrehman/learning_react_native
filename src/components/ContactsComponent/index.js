import React from 'react'
import { View, Text } from 'react-native'
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible, modalTitle, modalBody, modalFooter}) => {
  return (
    <View>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalTitle={modalTitle}
        modalBody={modalBody}
        modalFooter={modalFooter}
      />
      <CustomButton title={'Open modal'} color={colors.primary} onPress={() => setModalVisible(true)}/>
    </View>
  )
}

export default ContactsComponent;