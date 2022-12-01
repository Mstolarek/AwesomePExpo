import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {theme} from '../Constants/theme';
export interface GenericInputProps {
  label: string;
}

export const GenericInput = (props: GenericInputProps) => {
  const {label} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
  },
  caption: {
    fontSize: 12,
  },
});
