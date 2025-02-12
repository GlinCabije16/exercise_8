import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ANGELINE CABIJE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFD700', 
    padding: 20,
  },
  text: {
    color: 'white', 
    fontSize: 100, 
    fontFamily: "Arial", 
    fontWeight: 'bold', 
    textShadowColor: '#000', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 4, 
  },
});