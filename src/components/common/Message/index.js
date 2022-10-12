import React from 'react';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  message,
  primary,
  info,
  success,
  warning,
  danger,
  retryFn,
  onDismiss,
}) => {
  const [dismiss, setDismiss] = useState(false);

  const getBgColor = () => {
    if (success) {
      return colors.success;
    }
    if (primary) {
      return colors.primary;
    }
    if (info) {
      return colors.info;
    }
    if (warning) {
      return colors.warning;
    }
    if (danger) {
      return colors.danger;
    }
  };

  const getFlexWidthOfText = () => {
    if (typeof retryFn === 'function') {
      return 4;
    }

    if (typeof retryFn !== 'function') {
      return 6;
    }
  };

  return (
    <>
      {dismiss ? null : (
        <View style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <Text style={[styles.text, {flex: getFlexWidthOfText()}]}>
            {message}
          </Text>

          {typeof retryFn === 'function' && (
            <TouchableOpacity onPress={retryFn} style={[styles.retry]}>
              <Text style={{color: 'white'}}>Retry</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              if (typeof onDismiss === 'function') {
                onDismiss();
              }
              setDismiss(true);
            }}
            style={styles.dismiss}>
            <Text style={{color: 'white'}}>X</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Message;
