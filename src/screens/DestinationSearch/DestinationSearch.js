import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function DestinationSearch() {
  return (
    <View className="m-5">
      <TextInput className="text-xl" placeholder="Where are you going?" />
    </View>
  );
}
