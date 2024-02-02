import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CajaUno = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxPurple}></View>
            <View style={styles.boxOrange}></View>
            <View style={styles.boxGreen}></View>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#7fb3d5',
            justifyContent:'flex-start', 
            alignItems:'center',
            flexDirection: 'column'
        },
        boxPurple: {
            width: 100,
            height:100,
            backgroundColor: 'purple',
            borderWidth: 10,
            borderColor: 'white', 
            justifyContent:'flex-start',
            
        },
        boxOrange:{
            width: 100,
            height: 600,
            backgroundColor: 'orange',
            borderWidth: 10,
            borderColor: 'white',
            position: 'relative',
            alignSelf:'flex-end',
            top: 0,
        },
        boxGreen: {
            width:100,   
            height:100,  
            backgroundColor: 'green',
            borderWidth: 10,
            borderColor: 'white',
            alignSelf:'flex-end',
            top:0,
        }
        })  