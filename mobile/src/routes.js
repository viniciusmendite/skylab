import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Products from './pages/Products';
import ProductsWeb from './pages/ProductsWeb';

export default () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor: "#DA552F"
                },
                headerTitleAlign: 'center',
                headerTintColor: "#FFF"
                }} >
                <AppStack.Screen name="Products" component={Products} />
                <AppStack.Screen name="ProductsWeb" component={ProductsWeb} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}