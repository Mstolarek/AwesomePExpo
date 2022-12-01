import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useColorContext} from '../StateManagement/ColorContext/ColorContext';

export const GenericLoading = () => {
  const palette = useColorContext().state;

  return <ActivityIndicator size="large" color={palette.main} />;
};
