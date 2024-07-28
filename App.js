import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Landing from './src/pages/Landing';
import Register from './src/pages/Register';
import Login from './src/pages/Login';
import ProfileSetup from './src/pages/ProfileSetup';
import Home from './src/pages/Home';
import Recipe from './src/pages/Recipe';
import Profile from './src/pages/Profile';
import SavedRecipes from './src/pages/SavedRecipes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} options={{ headerLeft: null }} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Icon name="bars" size={24} style={{ marginRight: 10 }} />
              </TouchableOpacity>
            ),
          })} 
        />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SavedRecipes" component={SavedRecipes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
