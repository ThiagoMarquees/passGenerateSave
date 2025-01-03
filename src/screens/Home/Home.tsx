import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './Styles'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";
import { SaveButton } from "../../components/SaveButton/SaveButton";

export default function Home(){
  return (
    <>
     <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          <BatLogo/>
        </View>
        <View style={styles.inputContainer}>
          <BatButton/>
          <SaveButton/>
        </View>
          <StatusBar style="light" />
     </View>
    </>
  )
}