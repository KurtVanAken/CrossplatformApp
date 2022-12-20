import React from 'react';
import { useTheme } from '../styles/theme';

function colorHook(Component) {
    return function WrappedComponent(props) {
      const { colors, setScheme, isDark } = useTheme();
      return <Component {...props} myHookValue={[colors, setScheme, isDark]} />;
    }
  }

  export default colorHook;