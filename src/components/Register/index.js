import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/customButton';
import Input from '../../components/common/input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles.js';

const RegisterComponent = ({onChange, onSubmit, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>Welcome to RNContacts</Text>
      <Text style={styles.subTitle}>Create a free account</Text>

      <View style={styles.form}>
        <Input
          label={'Username'}
          placeholder={'Enter username'}
          error={errors.userName}
          onChangeText={value => onChange('userName', value)}
        />
        <Input
          label={'First name'}
          placeholder={'Enter first name'}
          error={errors.firstName}
          onChangeText={value => onChange('firstName', value)}
        />
        <Input
          label={'Last name'}
          placeholder={'Enter last name'}
          error={errors.lastName}
          onChangeText={value => onChange('lastName', value)}
        />
        <Input
          label={'Email'}
          placeholder={'Enter email'}
          error={errors.email}
          onChangeText={value => onChange('email', value)}
        />
        <Input
          label={'Password'}
          icon={<Text>Show</Text>}
          iconPosition={'right'}
          secureTextEntry={true}
          placeholder={'Enter password'}
          error={errors.password}
          onChangeText={value => onChange('password', value)}
        />
        <CustomButton
          title="Submit"
          color={colors.primary}
          onPress={onSubmit}
        />
      </View>
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComponent;
