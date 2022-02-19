import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { useState } from "react";
import FreelancerListScreen from "../modules/freelancer-list/freelancer-list.jsx";
import FreelancerDetailsScreen from '../modules/freelancer-details/freelancer-details.jsx';

const Routes = (props) => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="FreelancersScreen"
                    component={FreelancerListScreen} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="FreelancerDetailsScreen"
                    component={FreelancerDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;