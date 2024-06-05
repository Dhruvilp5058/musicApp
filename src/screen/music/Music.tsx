import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  getAll,
  SortSongFields,
  SortSongOrder,
} from 'react-native-get-music-files';
import {style} from './style';
import {color} from '../../../assets/color/color';
import {routesNav} from '../../component/String/string';
import {image} from '../../component/image/image';

interface Song {
  album: string;
  title: string;
}

const Music = ({route}) => {
  const navigation = useNavigation();
  const [songs, setSongs] = useState<Song[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const {item} = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (item && item.name) {
      filterSongsByAlbum(item.name);
    }
  }, [songs, item]);

  const fetchData = async () => {
    try {
      const songsOrError: Song[] | string = await getAll({
        sortBy: SortSongFields.ALBUM,
        sortOrder: SortSongOrder.DESC,
        limit:200
      });

      if (typeof songsOrError === 'string') {
        setError(songsOrError);
        setLoading(false);
        return;
      }

      const uniqueAlbums: any = Array.from(
        new Set(songsOrError.map(song => song.album)),
      );
      console.log(uniqueAlbums);
      setSongs(songsOrError);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  const filterSongsByAlbum = (albumName: string) => {
    const filtered = songs.filter(song => song.album === albumName);
    setFilteredSongs(filtered);
  };

  return (
    <View style={style.container}>
      <Text style={style.txtalbumname}>{item?.name}</Text>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={color.orange} />
        </View>
      ) : (
        <FlatList 
          numColumns={2}
          data={filteredSongs}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}: {item: Song}) => (
            <View style={style.itemview}>
            <Pressable
              onPress={() =>
                navigation.navigate(routesNav.musicplay, {song: item})
              }>
                <Image style={style.imageitem} source={image.musiclogo} />
                <Text style={style.txttitle}>{item.title}</Text>
            </Pressable>
              </View>
          )}
        />
      )}
    </View>
  );
};

export default Music;
