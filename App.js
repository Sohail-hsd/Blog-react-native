import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screen/IndexScreen';
import { Provider } from './src/Components/Context/BlogContext';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import AddScreen from './src/screen/AddScreen';
import EditScreen from './src/screen/EditScreen';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen name='Home' component={IndexScreen}/>
        <Stack.Screen name='Blog' component={ShowScreen} />
        <Stack.Screen name='Create' component={CreateScreen} />
        <Stack.Screen name='Add' component={AddScreen} />
        <Stack.Screen name='Edit' component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}