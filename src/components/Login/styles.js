import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 20,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 20,
  },
  createSection: {
    flexDirection: 'row',
    marginTop: 10,
  },
  infoText: {
    fontSize: 17,
  },
  link: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: 10,
  },
});
