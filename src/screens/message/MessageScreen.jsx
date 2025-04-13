import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, Pressable } from 'react-native';
import CustomModule from '../../native/CustomModule';
import { normalizePixel, RH, RW } from '../../utils/themes';

export const MessageScreen = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    try {
      CustomModule.sendMessage(message, (resp) => {
        setResponse(resp);
        setMessage('')
        Keyboard.dismiss()
      });
    } catch (error) {
      console.error(error);
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
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputStyle: {
    marginBottom: RW(10),
    fontSize: normalizePixel(15),
    backgroundColor: 'white',
    borderRadius: normalizePixel(10),
    paddingHorizontal: RH(15),
    height: RW(35)
  },
  responseText: {
    marginBottom: RW(50),
    color: 'green',
    fontSize: normalizePixel(20),
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: '#7393B3',
    paddingVertical: RW(10),
    borderRadius: normalizePixel(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15
  }
})