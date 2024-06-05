import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  PermissionsAndroid,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  iconname,
  localstring,
  routesNav,
} from '../../../component/String/string';
import {style} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {color} from '../../../../assets/color/color';
import {Product, Product2} from './musicCard';
import {useNavigation} from '@react-navigation/native';
import {
  getAll,
  SortSongFields,
  SortSongOrder,
} from 'react-native-get-music-files';

interface Song {
  album: string;
}

const HomeScreen2 = () => {
  const navigation = useNavigation();

  const navigateToSongsByAlbum = (item: any) => {
    navigation.navigate(routesNav.music, {item});
  };
  useEffect(() => {
    (async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === 'granted') {
        console.log('permesion granted');
      } else {
        console.log('permision denied');
      }
    })();
  }, []);

  return (
    <ScrollView style={style.scrollview}>
      <View style={style.main}>
        <View style={style.headerview}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={style.headertxt}>{localstring.goodafternoon}</Text>
          </View>
          <View style={style.btnviewheader}>
            <Pressable>
              <MaterialCommunityIcons
                size={35}
                name={iconname.bell}
                color={color.white}
              />
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons
                size={35}
                name={iconname.history}
                color={color.white}
              />
            </Pressable>
            <Pressable>
              <Feather size={35} name={iconname.settings} color={color.white} />
            </Pressable>
          </View>
        </View>
        <View>
          <FlatList
            data={Product}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <View style={style.itemview}>
                  <Image source={item.image} style={style.imageitem} />
                  <Text style={style.itemname}>{item.name}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View>
          <Text style={style.txtalbum}>{localstring.album}</Text>
          <FlatList
            data={Product2}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Pressable onPress={() => navigateToSongsByAlbum(item)}>
                <View>
                  <Image style={style.imageitem2} source={item.image} />
                  <Text style={style.itemalbumname}>{item.name}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen2;
