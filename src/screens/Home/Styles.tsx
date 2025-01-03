import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20%',
  },
  logoContainer:{
    width: '75%',
    flexDirection:'column',
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#4D4D4D'
  },
  inputContainer:{
    flexDirection:'column',
    width:'80%',
    alignItems:'center',
    textAlign:'center',
  }
});

export default styles