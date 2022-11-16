import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../../assets/theme/colors';

const Separator = ({color}) => {
  return (
    <View style={{height: 0.5, backgroundColor: color ?? colors.grey}}>
    </View>
  )
}

export default Separator;