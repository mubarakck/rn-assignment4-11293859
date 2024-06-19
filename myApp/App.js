import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator(); 

export default function App(){
  return (
    

    <NavigationContainer initialRouteName='Login'>


      <Stack.Navigator >
        
<Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
<Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>

      </Stack.Navigator>


     </NavigationContainer>

  );
};

