import React from 'react';
import { View, Text, StyleSheet,Button ,Image} from 'react-native';
 import { LinearGradient } from 'expo-linear-gradient';
 

 

export  default function HomeScreen() {
 
    return (
        <View style={styles.container}>
             <LinearGradient
               colors={['#000000ff', '#0b004fff', '#002382ff']}
                style={styles.background}
            />

            <Image source={require('../assets/logo_boris_animal.png')} style={{ width: 200, height: 200, marginBottom: 20, borderRadius: 100 }} />
         
         <View style={styles.buttonsContainer}>
            <Button   style="margin: 10px"  title="New Game" color="#2a06cd68"  ></Button>
            <Button style="margin: 10px"   title="Join Game" color="#2603c276" ></Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        padding: 20,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161664ff',
    },
    buttonsContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',

        justifyContent: 'center',
        flexDirection: 'row',
      
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffffff',
        marginBottom: 20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    main_button:{
        marginTop:10,
        width:200,
        height:50,
        backgroundColor:'#18007aff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        textAlign:'center',
        color:'#ffffff',
        fontSize:18,
        fontWeight:'bold',
    }
});

