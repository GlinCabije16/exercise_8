import { Link } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HTMLView from 'react-native-htmlview';

export default function Exercises() {

    const exercises = [
        {
            title: 'Exercise 3',
            description: `
            <ul><Strong>Create a Login Screen</Strong></ul>
            <ul><Strong>Login Screen</Strong></ul>
                <ul>
                    <li>Email (Text Input)</li>
                    <li>Password (Text Input)</li>
                    <li>Login (Button)</li>
                </ul>
                
            `,
            href: '/login'
        },
        {
            title: 'Exercise 4',
            description: `
            <ul><Strong>Create a stopwatch with two buttons<Strong></ul>
                <ul>
                    <li>One for Start/Stop </li>
                    <li>One for Reset.</li>
                </ul>
        
            `,
            href: '/effect'
        },
        {
            title: 'Exercise 5',
            description: `
            <ul><Strong>Create a Register Screen</Strong></ul>
                <ul>
              <li>Image Picker (User can select an image)</li>
                    <li>Name (Text Input)</li>
                    <li>Email (Text Input)</li>
                    <li>Password (Text Input)</li>
                    <li>Register (Button)</li>
                </ul>
        
            `,
            href: '/register'
        },
 
        { title: 'Exercise 6', description: 'Desc', href: '/' },
        { title: 'Exercise 7', description: 'Desc', href: '/' },
        { title: 'Exercise 8', description: 'Desc', href: '/' },
    ];
    

    return (
        <ScrollView style={{ padding: 20 }}>
            <View style={{ rowGap: 10 }}>
                {exercises.map((exercise, index) => {
                    return (
                        <Link key={index} href={exercise.href}>
                            <View style={styles.container}>
                                <Text style={styles.title}>{exercise.title}</Text>
                                <HTMLView 
                                    value={exercise.description}
                                    stylesheet={styles.html}
                                />
                            </View>
                        </Link>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFD700',
        borderRadius: 10,
        width: '100%',
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold',
        marginBottom: 10,
    },
    html: {
        p: {
            fontSize: 18, 
            lineHeight: 24, 
            marginBottom: 10, 
        },
        ul: {
            marginLeft: 20, 
            marginBottom: 10, 
            fontSize: 30,
           
        },
        li: {
            fontSize: 18, 
            marginBottom: 5,
            fontWeight: 'bold',
            color: 'blue', 
          
        },
        strong: {
            fontWeight: 'bold', 
        }
    }
});
