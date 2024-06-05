import {StyleSheet} from 'react-native';
import {color} from '../../../assets/color/color';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/responsiveDesign_File/Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    justifyContent: 'center',
  },
  image: {
    height: verticalScale(150),
    width: horizontalScale(150),
    alignSelf: 'center',
    bottom:verticalScale(20)
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: 16,
    color: color.white,
    textAlign: 'center',
  },
  details: {
    fontSize: 18,
    marginBottom: 8,
    color: color.white,
    marginLeft: horizontalScale(20),
  },
  slider: {
    width: '100%',
    height: 40,
  },
  time: {
    fontSize: 16,
    color: color.white,
    marginTop: verticalScale(10),
    marginLeft: horizontalScale(20),
  },
  btnplay: {
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
});
