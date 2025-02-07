import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, StyleSheet } from "react-native";

export default function Layout() {

    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Home',
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[
                            styles.iconContainer, 
                            { backgroundColor: focused ? 'orange' : 'transparent' }
                        ]}>
                            <MaterialIcons 
                                color={focused ? 'white' : color}
                                size={28} 
                                name="home" />
                        </View>
                    )
                }}
            />
            <Tabs.Screen 
                name="Exercise"
                options={{
                    title: 'Exercise',
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[
                            styles.iconContainer, 
                            { backgroundColor: focused ? 'orange' : 'transparent' }
                        ]}>
                            <MaterialIcons 
                                color={focused ? 'white' : color}
                                size={28} 
                                name="person" />
                        </View>
                    )
                }}  
            />
           
        </Tabs>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 40, // Adjust width for circular icon background
        height: 40, // Adjust height for circular icon background
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, // Makes the background circular
        padding: 5, // Padding to give some space around the icon
    }
});
