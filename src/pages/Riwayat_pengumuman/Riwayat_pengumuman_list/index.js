import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TablePengumuman } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'

const Riwayat_pengumuman_list = () => {
    return (
        <View style={ styles.page }>            
                <View styl={styles.container}>
                    <TablePengumuman/>                    
                </View>
        </View>
    )
}

export default Riwayat_pengumuman_list

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH
    },
    containerScroll:{
        height:300,
        marginHorizontal:13
    },
    container:{        
    },
})
