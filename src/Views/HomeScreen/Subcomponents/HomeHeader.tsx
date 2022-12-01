import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/drinkagram.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 48,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',

    height: 32,
    width: 160,
  },
});
