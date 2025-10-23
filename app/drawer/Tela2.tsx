import { StyleSheet, Text, View } from 'react-native';

export default function Tela2Screen(){
    return(
        <View  style={styles.container}>
            <Text style={styles.text}>Tela 02</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
          flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
    fontSize: 24, 
    fontWeight: 'bold',
  },
})

