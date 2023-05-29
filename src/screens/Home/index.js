import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function HomeScreen() {
  return (
    <View>
      <Pressable
        className="bg-white rounded-full flex flex-row items-center justify-center ml-6 h-14 absolute top-8 z-10 w-[90%]"
        onPress={() => console.warn('exploring')}>
        <Feather name="search" size={20} color="#900" />
        <Text className="text-center font-bold ml-3">Where are you going</Text>
      </Pressable>
      <ImageBackground
        className="w-full h-[500px] object-cover flex justify-center"
        source={require('../../../assets/images/usgs-hoS3dzgpHzw-unsplash.jpg')}>
        <Text className="text-8xl text-white font-bold w-[70%] ml-6">
          Go Near
        </Text>
        <Pressable
          className="bg-white w-44 ml-6 rounded-md p-2"
          onPress={() => console.warn('exploring')}>
          <Text className="text-center font-bold">Explore Nearby Stayes</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
