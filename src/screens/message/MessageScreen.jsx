import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, Pressable, Alert } from 'react-native';
import CustomModule from '../../native/CustomModule';
import { normalizePixel, RH, RW } from '../../utils/themes';
import { colors } from '../../utils/colors';

export const MessageScreen = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    if (!message.trim()) {
      Alert.alert('Error', 'Enter message');
      return;
    }
    try {

      CustomModule.sendMessage(message, (resp) => {
        setResponse(resp);
        setMessage('')
        Keyboard.dismiss()
      });
    } catch (error) {
      Alert.alert('Error', 'Network error');

    }
  };


  useEffect(() => {
    let timeout
    if (response) {
      timeout = setTimeout(() => {
        setResponse('')
      }, 3000)
    }
    return () => clearTimeout(timeout)
  }, [response])

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {response ? <Text style={styles.responseText}>{response}</Text> : null}
      </View>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Enter message"
        style={styles.inputStyle}
      />
      <Pressable onPress={handleSend} style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Send Message</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RH(20),
    paddingBottom: RW(20),
    backgroundColor: colors.dark_white
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    marginBottom: RW(10),
    fontSize: normalizePixel(14),
    backgroundColor: colors.white,
    borderRadius: normalizePixel(10),
    paddingHorizontal: RH(15),
    height: RW(48),
    color: colors.black
  },
  responseText: {
    marginBottom: RW(50),
    color: colors.green,
    fontSize: normalizePixel(20),
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: colors.blue,
    height: RW(48),
    borderRadius: normalizePixel(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.white,
    fontSize: normalizePixel(15)
  }
})