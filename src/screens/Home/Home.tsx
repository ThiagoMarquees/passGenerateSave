import React from "react";
import { View, ScrollView } from 'react-native';
import styles from './Styles'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/BatButton";
import { SaveButton } from "../../components/SaveButton/SaveButton";

export default function Home(){
  return (
    <>
    <ScrollView style={{flex: 1, backgroundColor: '#333333'}}>
     <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          <BatLogo/>
        </View>
        <View style={styles.inputContainer}>
          <BatButton/>
          <SaveButton/>
        </View>
     </View>
    </ScrollView>
    </>
  )
}