import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/Stack';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator initalRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={ { title: 'Welcome'}}  />

    </Stack.Navigator>
   </NavigationContainer>

    
 
  );
 }


});
