import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {
  getAll,
  SortSongFields,
  SortSongOrder,
} from 'react-native-get-music-files';
import {Button, useTheme} from 'react-native-paper';
import {color} from '../../../../assets/color/color';
import {iconname, routesNav} from '../../../component/String/string';
import {style} from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {image} from '../../../component/image/image';
interface Song {
  album: string;
}

const HomeScreen = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [albums, setAlbums] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const songsOrError: Song[] | string = await getAll({
        limit: 1000,
        offset: 0,
        coverQuality: 50,
        minSongDuration: 1000,
        sortBy: SortSongFields.ALBUM,
        sortOrder: SortSongOrder.DESC,
      });

      if (typeof songsOrError === 'string') {
        setError(songsOrError);
        return;
      }
      const uniqueAlbums: any = Array.from(
        new Set(songsOrError.map(song => song.album)),
      );
      setAlbums(uniqueAlbums);
      setLoading(false);
      setSongs(songsOrError); 
      // console.log(songsOrError)
      console.log(uniqueAlbums)
    } catch (error: any) {
      console.log(error)
    }
  };

  const navigateToSongsByAlbum = (album: string) => {
    const songsInAlbum: Song[] = songs.filter(song => song.album === album);
    navigation.navigate(routesNav.music, {songs: songsInAlbum, album});
  };

  return (
    <View style={style.container}>
      {loading ? (
        <View style={style.loadingview}>
          <ActivityIndicator size={'large'} color={color.orange} />
        </View>
      ) : (
        <>
          <FlatList
            data={albums}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Button
                icon={({size}) => (
                  <AntDesign
                    name={iconname.folder}
                    color={color.orange}
                    size={size}
                  />
                )}
                key={item}
                onPress={() => navigateToSongsByAlbum(item)}
                style={style.viewflatlist}>
                <Text style={style.itemtext}>{item}</Text>
              </Button>
            )}
          />
          <FlatList
            data={albums}
            horizontal
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Button
                icon={{
                  source: {
                    uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab52da00-71c2-4ae2-bc2a-3b28214b02c9/df5ivtx-eadd298a-d7bd-474b-8a5c-ac25ae236089.png/v1/fill/w_1280,h_1280/music_band_logo_design__song_logo_design_png__by_rahatislam11_df5ivtx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2FiNTJkYTAwLTcxYzItNGFlMi1iYzJhLTNiMjgyMTRiMDJjOVwvZGY1aXZ0eC1lYWRkMjk4YS1kN2JkLTQ3NGItOGE1Yy1hYzI1YWUyMzYwODkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.stwNmQZaDjjAVXsG4piJptiaoHLXKAsIMa3SAWCoV_c',
                  },
                  direction: 'rtl',
                }}
                key={item}
                onPress={() => navigateToSongsByAlbum(item)}
                style={style.viewflatlist}>
                <Text style={style.itemtext}>{item}</Text>
              </Button>
            )}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;
