import React from 'react';
import {Text} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/customButton';
import Input from '../../components/common/input';

const Login = () => {
  return (
    <Container>
      <Input label={'Username'} error="This field is required!" />
      <Input
        label={'Password'}
        icon={<Text>HIDE</Text>}
        iconPosition={'right'}
      />
      <CustomButton
        title="Submit"
        color={colors.primary}
        onPress={() => console.log('button pressed')}
      />
      <CustomButton title="Submit" color={colors.secondary} loading />
      <CustomButton title="Submit" color={colors.warning} loading />
      <CustomButton title="Submit" color={colors.success} loading />
      <CustomButton title="Submit" color={colors.danger} loading />
      <CustomButton title="Submit" color={colors.grey_dark} loading />
      <CustomButton title="Submit" loading disabled />
    </Container>
  );
};

export default Login;
