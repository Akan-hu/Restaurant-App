import {StyleSheet} from 'react-native';
import {themeColors} from '../../helper/colorConstants';

export const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 15,
  },
  img: {width: 50, height: 50, borderRadius: 30},
  bgcolor: isAtive => ({backgroundColor: !isAtive ? '#EDF2F7' : '#4B5563'}),
  textColor: isActive => ({
    color: !isActive ? '#AOAECO' : '#2D3748',
    fontWeight: isActive ? '600' : '400',
  }),
  shadowStyle: {
    shadowColor: themeColors.bgColor(0.2),
    shadowRadius: 5,
  },
});
