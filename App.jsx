import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withTheme } from 'react-native-paper';
import PaginaPrincipal from './src/pages/PaginaPrincipal';
import CustomAppBar from './src/components/CustomAppBar';
import About from './src/pages/About';

const Stack = createNativeStackNavigator();

function App({ theme }) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator cardStyle={{backgroundColor: 'transparent'}} screenOptions={{header: props => <CustomAppBar {...props} />}}>
        <Stack.Screen name="Home" component={PaginaPrincipal} options={{title: "Temperatio"}} />
        <Stack.Screen name="About" component={About} options={{title: "Sobre o Temperatio"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(App);
