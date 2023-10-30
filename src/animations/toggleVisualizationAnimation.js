import { LayoutAnimation } from "react-native";

export const toggleVisualizationAnimation = {
    duration: 200,
    update: {
        duration: 200,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut
    },
    delete: {
        duration: 100,
        property: LayoutAnimation.Properties.opacity,
        type: LayoutAnimation.Types.easeInEaseOut
    }
}