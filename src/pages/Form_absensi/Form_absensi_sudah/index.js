import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { NotifPengisian, TablePengisian } from '../../../components'

const Form_absensi_sudah = () => {
    return (
        <View>            
            <ScrollView style={styles.containerScroll}>
                <View styl={styles.container}>
                    <NotifPengisian/>
                    <TablePengisian/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Form_absensi_sudah

const styles = StyleSheet.create({
    
    containerScroll:{
        height:300,        
    },
    container:{        
    },
})