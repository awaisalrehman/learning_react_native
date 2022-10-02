import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/customButton';
import Input from '../../components/common/input';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles.js';

const RegisterComponent = ({
  onChange,
  onSubmit,
  form,
  errors,
  loading,
  error,
}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>Welcome to RNContacts</Text>
      <Text style={styles.subTitle}>Create a free account</Text>

      <View style={styles.formWrapper}>
        {error?.error && <Text>{error.error}</Text>}
        <View style={styles.form}>
          <Input
            label={'Username'}
            placeholder={'Enter username'}
            error={errors.userName || error?.username?.[0]}
            onChangeText={value => onChange('userName', value)}
          />
          <Input
            label={'First name'}
            placeholder={'Enter first name'}
            error={errors.firstName || error?.first_name?.[0]}
            onChangeText={value => onChange('firstName', value)}
          />
          <Input
            label={'Last name'}
            placeholder={'Enter last name'}
            error={errors.lastName || error?.last_name?.[0]}
            onChangeText={value => onChange('lastName', value)}
          />
          <Input
            label={'Email'}
            placeholder={'Enter email'}
            error={errors.email || error?.email?.[0]}
            onChangeText={value => onChange('email', value)}
          />
          <Input
            label={'Password'}
            icon={<Text>Show</Text>}
            iconPosition={'right'}
            secureTextEntry={true}
            placeholder={'Enter password'}
            error={errors.password || error?.password?.[0]}
            onChangeText={value => onChange('password', value)}
            // style={{  }}
          />
          <CustomButton
            title="Submit"
            color={colors.primary}
            onPress={onSubmit}
            loading={loading}
            disabled={loading}
          />

          <View style={styles.loginSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
