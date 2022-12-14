import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';
import styles from './styles';
import Icon from '../common/Icon';

const LoginComponent = ({
  form,
  onChange,
  onSubmit,
  loading,
  error,
  onErrorDismiss,
  justSignup,
}) => {
  const {navigate} = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <Container>
      <KeyboardAvoidingView>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>

        {justSignup && (
          <Message message={'Account created successfully!'} success />
        )}

        {error?.error && (
          <Message message={error?.error} onDismiss={onErrorDismiss} danger />
        )}

        {error && !error?.error && (
          <Message
            message={'Invalid credentials!'}
            onDismiss={onErrorDismiss}
            danger
          />
        )}

        <View style={styles.formWrapper}>
          <View style={styles.form}>
            <Input
              label={'Username'}
              placeholder={'Enter username'}
              value={form?.userName || null}
              autoCapitalize={'none'}
              onChangeText={value => onChange('userName', value)}
            />
            <Input
              label={'Password'}
              placeholder={'Enter password'}
              keyboardType={'email-address'}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setSecureTextEntry(prev => !prev);
                  }}>
                  <Icon
                    type={'entypo'}
                    name={secureTextEntry ? 'eye' : 'eye-with-line'}
                    size={21}
                  />
                </TouchableOpacity>
              }
              iconPosition={'right'}
              secureTextEntry={secureTextEntry}
              onChangeText={value => onChange('password', value)}
            />
            <CustomButton
              title="Submit"
              color={colors.primary}
              onPress={onSubmit}
              loading={loading}
              disabled={loading}
            />

            <View style={styles.registerSection}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity onPress={() => navigate(REGISTER)}>
                <Text style={styles.link}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default LoginComponent;
