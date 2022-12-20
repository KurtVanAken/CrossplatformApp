/* eslint-disable max-len */
import React, { useState, useCallback  } from 'react';
import { Text,View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { useTheme } from '../styles/theme/index';


SplashScreen.preventAutoHideAsync();

export const Showable =({ children })=>{
    const [customFontWeight, setCustomFontWeight] = useState("");

    
    const { colors, setScheme, isDark } = useTheme();
    const [fontsLoaded] = useFonts({
      'Zelda': require('../styles/theme/fonts/Triforce.ttf')
    });
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
  
 return (
        <View
        onMouseEnter={() => setCustomFontWeight(true)}
        onMouseLeave={() => setCustomFontWeight(false)}
        onLayout={onLayoutRootView}
        ><Text style={{fontWeight: customFontWeight? 'bold':'normal', color: colors.inventoryItemText, fontFamily:'Zelda', fontSize:RFPercentage(3)}}>
          { children }
      </Text>

        </View>

  );}
 



 