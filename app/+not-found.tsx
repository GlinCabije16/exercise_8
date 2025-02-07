import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.text}>Oops! Page Not Found</Text>
        <Link href={"/(tabs)/home"} style={styles.button}>
          Go to Home Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8fffff",
  },
  text: {
    fontSize: 24,
    color: "red",
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#000000",
  },
});
