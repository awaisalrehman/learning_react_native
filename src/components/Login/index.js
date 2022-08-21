import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/customButton';
import Input from '../../components/common/input';
import {REGISTER} from '../../constants/routeNames';
import styles from './styles';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>Welcome to RNContacts</Text>
      <Text style={styles.subTitle}>Please login here</Text>
      <View style={styles.form}>
        <Input label={'Username'} />
        <Input
          label={'Password'}
          icon={<Text>Show</Text>}
          iconPosition={'right'}
          secureTextEntry={true}
        />
        <CustomButton
          title="Submit"
          color={colors.primary}
          onPress={() => console.log('button pressed')}
        />
      </View>
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Need a new account?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;
