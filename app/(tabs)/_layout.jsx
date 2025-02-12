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
                    name="fitness-center" />  {/* Updated Icon */}
            </View>
                 )
              }}  
            />

           
        </Tabs>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, 
        padding: 5, 
    }
});
