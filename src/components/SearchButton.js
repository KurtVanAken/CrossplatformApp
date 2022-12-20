import React from 'react';
import { TouchableHighlight, Text } from 'react-native';


const SearchButton = ({ children, onPressed }) => {

  return (
    <TouchableHighlight  onPress={onPressed}>
      <Text >{children}</Text>
    </TouchableHighlight>
  );
};


export default SearchButton;