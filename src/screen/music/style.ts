import {StyleSheet} from 'react-native';
import {color} from '../../../assets/color/color';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/responsiveDesign_File/Metrics';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  txtalbumname: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: color.white,
  },
  itemview: {
    borderWidth: 1,
    borderColor: color.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10), 
    flex:1
  },
  imageitem: {
    height: verticalScale(100),
    width: horizontalScale(100),
    alignSelf: 'center',
  },
  txttitle: {
    color: color.white,
    fontSize: moderateScale(16),
    fontWeight: '400',
    textAlign:'center'
  },
});
