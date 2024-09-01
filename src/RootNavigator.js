import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SearchScreen from "./screens/Search";
import Results from "./screens/Results";


const Stack = createStackNavigator();

function RootNavigator() {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Search" screenOptions={{ headerTitle: "Business Search"}}>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="Results" component={Results}/>
        </Stack.Navigator>
    </NavigationContainer>;
}

export default RootNavigator;