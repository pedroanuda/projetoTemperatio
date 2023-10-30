import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Surface, TouchableRipple, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    touchArea: {
        borderRadius: 10,
        padding: 20
    },
    surfaceStyle: {
        margin: 10,
        borderRadius: 10
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    }
});

export default function HomeButton({ icon, title, style, onPress }) {
    return (
        <Surface style={{...styles.surfaceStyle, ...style}} mode="flat" elevation={3}>
            <TouchableRipple style={styles.touchArea} onPress={onPress}>
                <View style={styles.viewStyle}>
                    <Icon size={30} source={icon} />
                    <Text variant="titleLarge" style={{fontWeight: 600}}>{title}</Text>
                </View>
            </TouchableRipple>
        </Surface>
    )
}
