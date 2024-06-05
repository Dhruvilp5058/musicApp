import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Sound from 'react-native-sound';
import {useRoute, useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {iconname} from '../../component/String/string';
import {color} from '../../../assets/color/color';
import {styles} from './style';
import { image } from '../../component/image/image';

const MusicPlayer = () => {
  const route = useRoute();
  console.log(route.params);
  const {song} = route.params;
  const [sound, setSound] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    let soundInstance = null;

    const loadSound = async () => {
      try {
        soundInstance = new Sound(song.url, Sound.MAIN_BUNDLE, error => {
          if (error) {
            console.log('Failed to load the sound', error);
            return;
          }
          setDuration(soundInstance.getDuration());
        });

        setSound(soundInstance);
      } catch (error) {
        console.log('Error loading sound:', error);
      }
    };

    if (!sound) {
      loadSound();
    } else {
      if (isPlaying) {
        sound.play(success => {
          if (!success) {
            console.log('Playback failed due to audio decoding errors');
          }
        });
      } else {
        sound.pause();
      }
    }

    const interval = setInterval(() => {
      if (isPlaying) {
        sound.getCurrentTime(seconds => {
          setCurrentTime(seconds);
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      if (soundInstance) {
        soundInstance.release();
      }
    };
  }, [song.url, isPlaying, sound]);

  const playPause = () => {
    if (!isPlaying) { 
      if (sound) {
        sound.setCurrentTime(currentTime);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };
  return (
    <View style={styles.container}>
      <Image
      source={image.musiclogo}
      style={styles.image}
      />
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.details}>{song.artist || 'Unknown Artist'}</Text>
      <Text style={styles.details}>{song.album || 'Unknown Album'}</Text>
      <Text style={styles.time}>
        {formatTime(currentTime)} / {formatTime(duration)}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#8ED1FC"
        thumbTintColor="#1EB1FC"
        onValueChange={value => {
          setCurrentTime(value);
        }}
        onSlidingComplete={value => {
          if (sound) {
            sound.setCurrentTime(value);
          }
        }}
      />
    
      <TouchableOpacity onPress={playPause} style={styles.btnplay}>
        <AntDesign
          name={isPlaying ? iconname.pause : iconname.play}
          size={80}
          color={color.orange}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MusicPlayer;
