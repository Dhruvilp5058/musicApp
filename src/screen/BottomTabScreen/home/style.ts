import {StyleSheet} from 'react-native';
import {color} from '../../../../assets/color/color';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../assets/responsiveDesign_File/Metrics';

export const style = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: color.primary,
  },
  main: {
    flex: 1,
  },
  loadingview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(15),
  },
  btnviewheader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0.5,
    alignItems: 'center',
  },
  headertxt: {
    color: color.white,
    fontSize: moderateScale(28),
    fontWeight: '600',
    margin: moderateScale(15),
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  itemview: {
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(40),
    alignItems: 'center',
  },
  imageitem: {
    height: verticalScale(250),
    width: horizontalScale(330),
    borderRadius: moderateScale(30),
  },
  itemname: {
    color: color.white,
    position: 'absolute',
    bottom: verticalScale(10),
    fontSize: moderateScale(30),
    fontWeight: '700',
  },
  txtalbum: {
    color: color.white,
    fontSize: moderateScale(30),
    marginTop: verticalScale(25),
    marginLeft: horizontalScale(40),
  },
  imageitem2: {
    height: verticalScale(120),
    width: horizontalScale(200),
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(20),
    borderRadius: moderateScale(30),
  },
  albumbtn: {
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: horizontalScale(30),
  },
  itemtext: {
    color: color.white,
    fontSize: moderateScale(18),
  },
  itemalbumname: {
    color: color.white,
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
});

// container: {
//   flex: 1,
//   backgroundColor: color.primary,
// },
// loadingview: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// viewflatlist: {
//   borderWidth: 1,
//   borderColor: color.lightgrey,
//   paddingVertical: verticalScale(10),
//   paddingHorizontal: horizontalScale(8),
//   margin: moderateScale(2),
//   alignItems:'flex-start',
//   justifyContent:'center',
// },
// itemtext: {
//   fontSize: moderateScale(18),
//   color:color.white,
// },
