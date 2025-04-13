import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { normalizePixel, RH, RW } from '../../utils/themes';

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    

    const handleLogin = async () => {
        if (!email.trim()) {
            Alert.alert('Error', 'Enter email');
            return;
        }

        const token = Math.random().toString(36).substring(2);
        await AsyncStorage.setItem('token', token);
        navigation.replace('TabNavigator');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/avatar.jpg')}
                style={styles.avatar}
            />
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Login to your account using your email</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: normalizePixel(24),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    avatar: {
        width: RH(100),
        aspectRatio: 1,
        marginBottom: RW(20),
    },
    title: {
        fontSize: normalizePixel(28),
        fontWeight: '700',
        marginBottom: RW(8),
    },
    subtitle: {
        fontSize: normalizePixel(14),
        color: '#666',
        marginBottom: RW(24),
    },
    input: {
        width: '100%',
        height: RW(48),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: normalizePixel(10),
        paddingHorizontal: RH(16),
        marginBottom: RW(16),
    },
    button: {
        backgroundColor: '#0066FF',
        paddingVertical: RW(14),
        width: '100%',
        borderRadius: normalizePixel(10),
        alignItems: 'center',
        marginBottom: RW(16),
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: normalizePixel(16),
    },
})