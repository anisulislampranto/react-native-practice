import React from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

export default function SearchResultsScreen() {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post data={item} />} />
    </View>
  );
}
