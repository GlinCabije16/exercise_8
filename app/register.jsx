import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterScreen() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.transparentBox}>
                <Text style={styles.title}>Create Account</Text>

                <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Ionicons name="camera" size={40} color="#444" />
                    )}
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={20} color="#666" style={styles.icon} />
                    <TextInput 
                        placeholder="Full Name" 
                        value={name} 
                        onChangeText={setName} 
                        style={styles.input} 
                        placeholderTextColor="#666"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="mail" size={20} color="#666" style={styles.icon} />
                    <TextInput 
                        placeholder="Email Address" 
                        value={email} 
                        onChangeText={setEmail} 
                        style={styles.input} 
                        keyboardType="email-address" 
                        placeholderTextColor="#666"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed" size={20} color="#666" style={styles.icon} />
                    <TextInput 
                        placeholder="Password" 
                        value={password} 
                        onChangeText={setPassword} 
                        secureTextEntry 
                        style={styles.input} 
                        placeholderTextColor="#666"
                    />
                </View>

                <Button 
                    mode="contained" 
                    onPress={() => alert("Registered Successfully!")} 
                    style={styles.registerButton}
                >
                    Sign Up
                </Button>

                <Button mode="text" onPress={() => router.back()} style={styles.backButton}>
                    Back
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFD700", 
    },
    transparentBox: {
        width: "30%",
        padding: 20,
        borderRadius: 15,
        backgroundColor: "rgba(255, 255, 255, 0.45)", 
        elevation: 5, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    imagePicker: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "#444",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 45,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 30,
        paddingHorizontal: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    registerButton: {
        width: "100%",
        marginTop: 20,
        backgroundColor: "#57ABFF",
        borderRadius: 10,
        paddingVertical: 8,
    },
    backButton: {
        marginTop: 10,
    },
});

