import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const CustomButton = ({title, color, loading, disabled, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      {...props}
      disabled={disabled}
      activeOpacity={0.6}>
      <View
        style={[
          styles.wrapper,
          {backgroundColor: disabled ? colors.grey : color},
        ]}>
        {loading && (
          <ActivityIndicator color={'#fff'} style={{paddingRight: 5}} />
        )}
        <Text
          style={[
            styles.title,
            {color: disabled ? colors.grey_dark : 'white'},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
