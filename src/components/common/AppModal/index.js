import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react' 
import styles from './styles';
import Icon from '../Icon';
import Separator from '../Separator';
import colors from '../../../assets/theme/colors';

const AppModal = ({modalVisible, setModalVisible, modalTitle, modalBody, modalFooter}) => {
  return (
    <Modal visible={modalVisible} transparent>
        <View style={styles.wrapper}>
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Icon type={'evil'} name={'close'} size={27} />
                    </TouchableOpacity>
                    <View><Text style={styles.modalTitle}>{modalTitle}</Text></View>
                    <View/>
                </View>
                <Separator />
                <View style={styles.modalBody}>{modalBody}</View>
                
                {modalFooter}

                {!modalFooter && (
                    <View>
                        <Separator />
                        <View style={styles.modalFooter}>
                            <View style={styles.footerItems}>
                                <Text style={styles.footerText}>Privacy Policy</Text>
                                <Icon type={'entypo'} name="dot-single" size={22} color={colors.grey} />
                                <Text style={styles.footerText}>Terms of Service</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </View>
    </Modal>
  )
}

export default AppModal;