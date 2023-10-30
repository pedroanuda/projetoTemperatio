import { toggleVisualizationAnimation } from '../../animations/toggleVisualizationAnimation';
import React, { useState } from 'react';
import { StyleSheet, View, LayoutAnimation } from 'react-native';
import { Button } from 'react-native-paper';
import { UIManager } from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental(true);

const styles = StyleSheet.create({
    view: {
        transition: 'height 2s'
    },
    button: {
        height: 'auto',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flex: 0
    }
})

/**
 * A Button that collapses.
 * 
 * @param {str} title The text content of the button.
 * @param {str} expandedTitle The text content of the button when expanded.
 * @param {'left' | 'center' | 'right'} position The position of the text content.
 */
export default function CollapseButton({ children, title, expandedTitle, position }) {
  const [expanded, setExpanded] = useState(false);

  const toggleVisualization = () => {
    LayoutAnimation.configureNext(toggleVisualizationAnimation);
    setExpanded(!expanded);
  }

  return (
    <View collapsable style={{...styles.view, height: expanded ? 'auto' : 0,
    paddingBottom: expanded ? 55 : 48, overflow: 'hidden'}}>
        <Button mode="outlined" icon={expanded ? 'chevron-up' : 'chevron-down'}
        style={styles.button} onPress={toggleVisualization}>
            {expandedTitle ? (expanded ? expandedTitle : title) : title}
        </Button>
        <View style={{height: expanded ? 'auto' : 0, overflow: 'hidden'}}>
            {children}
        </View>
    </View>
  )
}
