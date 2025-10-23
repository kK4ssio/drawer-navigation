import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(){
    return(
        <View>
            <Text style={styles.text}>Tela 01</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
          flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

