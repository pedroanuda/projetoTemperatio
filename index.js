/**
 * @format
 */

import { useMemo } from 'react';
import { AppRegistry, useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import App from './App';

export default function Main() {
    const colorScheme = useColorScheme();
    const { theme } = useMaterial3Theme({fallbackSourceColor: "#438791"});

    const paperTheme = useMemo(() => colorScheme === 'dark'
    ? {...MD3DarkTheme, colors: theme.dark}
    : {...MD3LightTheme, colors: theme.light},
    [colorScheme, theme])

    return (
        <PaperProvider theme={paperTheme}>
            <App theme={paperTheme} />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
