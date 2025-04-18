import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';  // For unique file names

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Make sure both passwords are the same.');
      return;
    }

    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      console.log('User Registered:', userCredential.user);

      if (profileImage) {
        const fileName = profileImage.fileName || `${uuidv4()}.jpg`;  // Use UUID for uniqueness
        const reference = storage().ref(`/users/${userCredential.user.uid}/${fileName}`);
        await reference.putFile(profileImage.uri);

        const downloadURL = await reference.getDownloadURL();
        console.log('Profile Image URL:', downloadURL);

        await firestore()
          .collection('users')
          .doc(userCredential.user.uid)
          .set({
            email: email,
            profileImageUrl: downloadURL,
          });
      }

      Alert.alert('Success', 'Registration completed!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setProfileImage(null);
      navigation.navigate('Home');  // Redirect after registration

    } catch (error) {
      console.error('Error in registration:', error);
      Alert.alert('Registration Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0]);
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.description}>Create your new account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.uploadButton} onPress={handleImagePick}>
          <Text style={styles.uploadButtonText}>Pick Profile Image</Text>
        </TouchableOpacity>

        {profileImage && <Image source={{ uri: profileImage.uri }} style={styles.profileImage} />}

        {loading ? (
          <ActivityIndicator size="large" color="#007bff" />
        ) : (
          <Button title="Register" onPress={handleRegister} color="#007bff" />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    backgroundColor: '#FFD700',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
    width: '85%',
    maxWidth: 400,
    minWidth: 300,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 18,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default RegistrationScreen;
