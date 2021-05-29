import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonKembali, Form_1, Form_2, Form_3, Form_4 } from '../../../components'


const Form_absensi_detail = () => {
    return (
        <View>
            <View style={styles.form}>
                <Form_1/>                
            </View>
            <View style={styles.form}>
                <Form_2/>
            </View>
            <View style={styles.form}>
                <Form_3/>                
            </View>
            <View style={styles.form}>
                <Form_4/>                
            </View>            
            <View style={styles.buttonKembali}>
                <ButtonKembali/>
            </View>            
        </View>
    )
}

export default Form_absensi_detail

const styles = StyleSheet.create({
    form:{
        borderWidth:0.2,
        paddingHorizontal:5,
        borderRadius:3,
        marginBottom:10
    },
    buttonKembali:{
        alignItems:'flex-end',
        marginBottom:5
    }
})
