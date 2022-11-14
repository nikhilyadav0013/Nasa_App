import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, About, Random } from "../screens";
import { StackParamList } from "./stackParamList";

const Stack = createNativeStackNavigator<StackParamList>()

const AppStack: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={About}  />
                <Stack.Screen name="Random" component={Random} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppStack