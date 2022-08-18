import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({label, icon, iconPosition, error, style, ...props}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition === 'left') {
      return 'row';
    } else {
      return 'row-reverse';
    }
  };

  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }

    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getFlexDirection(), borderColor: getBorderColor()},
        ]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          style={[
            styles.textInput,
            {textAlign: icon ? 'center' : 'left'},
            style,
          ]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
