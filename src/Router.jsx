import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from './pages/Favorites';
import Products from './pages/Products';


const Router = () => {

    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();

    
    const TabNavigator = () => {
        return (
            <Tab.Navigator>
                <Tab.Screen name="ProductsTab" component={Products} />
                <Tab.Screen name="FavoritesTab" component={Favorites} />
            </Tab.Navigator>
        )
    }


    const DrawerNavigator = () => {
        return (
            <Drawer.Navigator initialRouteName="Products">
                <Drawer.Screen name="ProductsDrawer" component={Products} />
                <Drawer.Screen name="FavoritesDrawer" component={Favorites} />
            </Drawer.Navigator>
        )
    }


    return (
        <NavigationContainer>

            {
                DrawerNavigator()
                //TabNavigator()
            }

        </NavigationContainer>
    )

}


export default Router;