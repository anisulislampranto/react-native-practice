import {View, Text, Image} from 'react-native';
import React from 'react';

export default function Post({data}) {
  console.log(data);

  return (
    <View className="m-5">
      <Image
        source={{uri: data?.image}}
        className="w-full rounded-2xl object-cover aspect-[3/2]"
      />
      <Text className="mt-3">
        {' '}
        {data?.bed} Bed {data?.bedroom} Bedroom{' '}
      </Text>

      <Text className="text-lg text-black my-2">{data?.title}</Text>

      <Text className="my-2">
        <Text className="line-through">${data?.oldPrice} </Text>
        <Text className="font-bold"> ${data?.newPrice}</Text> / Night
      </Text>

      <Text>${data?.totalPrice}</Text>
    </View>
  );
}
