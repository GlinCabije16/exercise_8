import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    function handleStartPause() {
        setIsRunning(!isRunning);
    }

    function handleReset() {
        setIsRunning(false);
        setTime(0);
    }

    function formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{formatTime(time)}</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={handleReset} title="Reset" color="#d9534f"  />
                <Button onPress={handleStartPause} title={isRunning ? "Pause" : "Start"} color="#5cb85c" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD700',
    },
    timer: {
        fontSize: 80,
        fontWeight: 'bold',
        marginBottom: 20,   
        color: 'white',
        textShadowColor: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        height: 50,
      
    },
    
});
