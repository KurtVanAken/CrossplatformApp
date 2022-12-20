import React from 'react';
import { View, StyleSheet , Text, Image} from 'react-native';

const Separator = () => {
  const {
    separator,
    SeparatorLogo
  } = styles;
return(
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
<View>
  <Text style={{width: 50, textAlign: 'center'}}>▲
▲‌ ▲</Text>
  
</View>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
);

}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  SeparatorLogo:{
    height: 5,
    width: 5
  }
});

export default Separator;