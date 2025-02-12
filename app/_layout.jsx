import { Stack } from "expo-router";

export default function RootLayout() {

    return (
        <Stack>
            <Stack.Screen 
                name="(tabs)" 
                options={{
                    headerShown: false,
                }}
            />
          
            <Stack.Screen
                name="login" 
                />
            <Stack.Screen 
                name="+not-found" 
                options={{
                    headerShown: false,
                }}
            />
             <Stack.Screen 
                name="effect"
                options={{
                    headerShown: true,
                }}/>
            <Stack.Screen
                name="state"/>
        </Stack>
    )
}