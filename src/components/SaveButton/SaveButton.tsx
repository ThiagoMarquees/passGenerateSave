import React, {useState} from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { styles } from './SaveButtonStyle';

export function SaveButton() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [contas, setContas] = useState<{usuario: string; senha: string}[]>([])
  const [hidePass, setHidePass] = useState(true);

  function handleSaveButton () {
    if (usuario && senha){
      const novaConta = {usuario, senha}
      setContas((prevConta) => [...prevConta, novaConta])
      setUsuario('')
      setSenha('')
    }else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <ScrollView>
    <View style = {styles.container}>
      <Text style = {styles.texto}>Salve para não esquecer</Text>
      <TextInput style = {styles.inputs} placeholder='Conta' placeholderTextColor={'#E5DF3C'} onChangeText={(text) => setUsuario(text)} ></TextInput>
      <TextInput style = {styles.inputs} secureTextEntry={true} placeholder='Senha' placeholderTextColor={'#E5DF3C'} onChangeText={(text) => setSenha(text)}></TextInput>
    
    <Pressable onPress={handleSaveButton}>
      <Text style = {styles.inputs}>Salvar</Text>
    </Pressable>
    <View>
      {contas.map((item, index) => (
        <View key={index} style={styles.cards}>
          <Text>Usuario: {item.usuario}</Text>
          <Text>Senha: {hidePass ? "******" : item.senha }
            <Pressable>
              <Text onPress={() => setHidePass(!hidePass)}>🙈</Text>
            </Pressable>
          </Text>      
        </View>
      ))}
    </View>
    </View>
    </ScrollView>

  );
}