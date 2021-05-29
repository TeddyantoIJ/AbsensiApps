import React from 'react'
import { StyleSheet,Text, View, ScrollView } from 'react-native'
import { WARNA_PUTIH } from '../../utils/constants'
import { Form_absensi_sudah, Form_absensi_1, Form_absensi_2, Form_absensi_3,
    Form_absensi_4, Form_absensi_5, Form_absensi_detail } from './Form_routing'

const Form_absensi = () => {
    return (
        <View style={ styles.page }>
            <ScrollView style={styles.containerScrollView}>
                <Form_absensi_sudah/>
                {/* <Form_absensi_detail/> */}
                {/* <Form_absensi_1/> */}
                {/* <Form_absensi_2/> */}
                {/* <Form_absensi_3/> */}
                {/* <Form_absensi_4/> */}
                {/* <Form_absensi_5/> */}
            </ScrollView>
        </View>
    )
}

export default Form_absensi

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        
    },
    containerScrollView:{
        paddingHorizontal:13
    }
})
