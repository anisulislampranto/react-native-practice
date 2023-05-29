// @ts-nocheck
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch/DestinationSearch';

function App(): JSX.Element {
  const post1 = feed[0];

  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post data={post1} /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearch />
      </SafeAreaView>
    </>
  );
}

export default App;
