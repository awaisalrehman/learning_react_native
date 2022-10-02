import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
  },
  wrapper: {
    alignItems: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  icon: {
    padding: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    textAlign: 'left',
  },
  error: {
    color: colors.danger,
    fontSize: 12,
  },
});
