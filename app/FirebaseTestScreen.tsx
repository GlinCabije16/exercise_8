import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firebaseConfig } from './firebase';  // Correctly import auth from firebase.ts

const FirebaseTestScreen = () => {
  useEffect(() => {
    // Initialize Firebase if not already initialized
    if (getApps().length === 0) {
      initializeApp(firebaseConfig);  // Use the firebaseConfig here
      console.log('✅ Firebase initialized');
    } else {
      console.log('ℹ️ Firebase already initialized');
    }

    // Dummy login to check if Firebase is responding
    signInWithEmailAndPassword(auth, 'test@example.com', 'wrongpassword')
      .then((userCredential) => {
        console.log('✅ Logged in successfully:', userCredential.user);
      })
      .catch((error) => {
        console.log('❌ Firebase responded:', error.code, error.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Check your console/logs for Firebase connection status</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default FirebaseTestScreen;
