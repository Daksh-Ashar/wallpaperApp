import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


function HomeScreen() {
    return (
        <View>
            <Text>Hello From Homescreen</Text>
        </View>
    )
}

function ProfileScreen() {
    return (
        <View>
            <Text>Hello From ProfileScreen</Text>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
    return (
        <SafeAreaView>
           <Tab.Navigator>
                <Tab.Screen name="Library" component={HomeScreen} />
                <Tab.Screen name="Liked" component={ProfileScreen} />
                <Tab.Screen name="Suggested" component={ProfileScreen} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

