import { Pressable, StyleSheet, Text, View, Linking, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import { normalizePixel, RH, RW } from '../../utils/themes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuth } from '../../context/AuthContext'
import { PERMISSIONS, requestMultiple, RESULTS, openSettings } from 'react-native-permissions'
import Geolocation from 'react-native-geolocation-service';
import { colors } from '../../utils/colors'

export const LocationScreen = ({ navigation }) => {
  const { setAuthenticated } = useAuth()
  const [location, setLocation] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const onLogOut = async () => {
    await AsyncStorage.removeItem('token')
    setAuthenticated(false)
    navigation.replace('Login')
  }

  const checkPermission = async () => {
    const permissions = Platform.OS === 'ios'
      ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
      : [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION];

    try {
      const statuses = await requestMultiple(permissions);
      const hasPermission = permissions.every(
        (permission) => statuses[permission] === RESULTS.GRANTED || statuses[permission] === RESULTS.LIMITED,
      );

      const isPermanentlyDenied = permissions.some((permission) => statuses[permission] === RESULTS.BLOCKED);

      if (isPermanentlyDenied) {
        setErrorMessage('Location permission is permanently denied. Please enable it in app settings.');
        return false;
      }
      return hasPermission;
    } catch (error) {
      setErrorMessage('Error checking location permissions');
      return false;
    }
  };

  const getLocation = async () => {
    try {
      setErrorMessage('');
      const hasPermission = await checkPermission();
      if (!hasPermission) {
        if (errorMessage.includes('permanently denied')) {
          Alert.alert(
            'Location Permission Required',
            'Location permission is permanently denied. Would you like to open app settings to enable it?',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Open Settings', onPress: () => openSettings() }
            ]
          );
        }
        return;
      }

      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          (position) => {
            const coords = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            setLocation(coords);
            resolve(coords);
          },
          (error) => {
            setErrorMessage('Error getting location. Please try again.');
            reject(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      });
    } catch (error) {
      setErrorMessage('Error getting location. Please try again.');
      return false
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onLogOut}>
          <Text style={styles.logOutText}>Log out</Text>
        </Pressable>
      </View>

      <View style={styles.body}>
        <Pressable style={styles.locationButtonStyle} onPress={getLocation}>
          <Text style={styles.locationButtonTextStyle}>Get My Location</Text>
        </Pressable>

        {!!errorMessage && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
            {errorMessage.includes('permanently denied') && (
              <Pressable
                style={styles.settingsButton}
                onPress={() => openSettings()}
              >
                <Text style={styles.settingsButtonText}>Open Settings</Text>
              </Pressable>
            )}
          </View>
        )}

        {!!location &&
          <>
            <Text>{`longitude: ${location.longitude}`}</Text>
            <Text>{`latitude: ${location.latitude}`}</Text>
          </>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark_white,
    paddingHorizontal: RH(20)
  },
  header: {
    width: '100%',
    alignItems: 'flex-end'
  },
  logOutText: {
    color: colors.blue,
    fontWeight: '600',
    marginTop: RW(20)
  },
  body: {
    flex: 1,
    paddingTop: RW(150),
    alignItems: 'center'
  },
  locationButtonStyle: {
    paddingHorizontal: RH(20),
    paddingVertical: RW(8),
    backgroundColor: colors.blue,
    borderRadius: normalizePixel(12),
    marginBottom: RW(20)
  },
  locationButtonTextStyle: {
    color: colors.white,
    fontSize: normalizePixel(17)
  },
  errorContainer: {
    marginTop: RW(20),
    alignItems: 'center'
  },
  errorText: {
    color: colors.red,
    textAlign: 'center',
    marginBottom: RW(10)
  },
  settingsButton: {
    paddingHorizontal: RH(15),
    paddingVertical: RW(8),
    backgroundColor: colors.orange,
    borderRadius: normalizePixel(8)
  },
  settingsButtonText: {
    color: colors.white,
    fontSize: normalizePixel(15)
  }
})