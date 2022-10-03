import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
  retry: {
    flex: 1,
    alignItems: 'center',
  },
  dismiss: {
    flex: 1,
    alignItems: 'center',
  },
});
