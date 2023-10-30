import React from 'react';
import { View } from 'react-native';
import { Text, Surface } from 'react-native-paper';

/**
 * Section of results.
 * @param {str} title Name of the section.
 * @param {Array<str>} results List of contents in boxes.
 */
export default function ResultSection({ title, results, surfaceStyle, style }) {
  return (
    <View style={{gap: 5, ...style}}>
        <Text variant="titleMedium" style={{textAlign: 'center', fontWeight: 600}}>{title}</Text>
        <View style={{flexDirection: 'row', gap: 10}}>
            {results.map((result, indx) => (
                <Surface style={{...surfaceStyle, flex: 1}} key={indx} elevation={4}>
                    {result}
                </Surface>
            ))}
        </View>
    </View>
  )
}
