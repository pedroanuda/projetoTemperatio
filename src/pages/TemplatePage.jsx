import { StyleSheet, SafeAreaView, StatusBar, ScrollView, useColorScheme } from "react-native";
import { useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default function TemplatePage({ children }) {
    const isDarkMode = useColorScheme() === 'dark';
    const theme = useTheme();

    return (
        <SafeAreaView style={{...styles.container, backgroundColor: theme.colors.background}}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={isDarkMode ? theme.colors.surface : '#FBFDF8' } />
            <ScrollView>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}
