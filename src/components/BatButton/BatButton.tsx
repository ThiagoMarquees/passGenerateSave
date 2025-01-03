import React, { useState } from 'react';
import { View, Button, Text, Pressable, Alert} from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {

  const [pass, SetPass] = useState('')

  function handleGenerateButton () {
    let generateToken = generatePass
    SetPass(generateToken)
  }
  function handleCopyButton () {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <BatTextInput pass={pass}/>
      <Pressable 
      onPress={handleGenerateButton}
      style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>
      <Pressable 
      onPress={handleCopyButton}
      style={styles.button}
      >
        <Text style={styles.text}>COPY</Text>
      </Pressable>
    </>
  );
}