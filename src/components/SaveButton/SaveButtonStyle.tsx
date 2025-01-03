import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
    padding: 15,
    borderTopWidth: 2,
    borderTopColor: '#E7E7E7'
  },
  texto: {
    width: '100%',
    textAlign:'center',
    fontSize:17,
    backgroundColor: '#E5Bf3C',
    padding: 10,
    borderRadius: 5,
    margin: 3,
  },
  inputs: {
    width: '100%',
    textAlign:'center',
    fontSize:17,
    backgroundColor: 'black',
    color:'#E5DF3C',
    padding: 10,
    borderRadius: 5,
    margin: 3,
  },
  cards:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'#E5Bf3C',
    padding: 20,
    paddingTop: 10,
    borderRadius: 7,
    margin: 7,
  }
});